/* printer — Hebrew SQL & Python practice game (v2: learn + practice) */
(function () {
  const STORAGE_KEY = "printer-v2";
  const SESSION_SIZE = (window.Quiz && window.Quiz.SESSION_SIZE) || 6;
  const $app = document.getElementById("app");
  const TYPE_LABELS = {
    mcq: "רב-ברירה",
    predict: "נחשו את התוצאה",
    fill: "השלימו את הקוד",
    write: "כתבו קוד",
  };

  let SQL = null;
  let sqlReady = null;
  let state = loadState();
  let session = null;

  function todayStr() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function yesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }

  function defaultState() {
    return { xp: 0, streak: 0, lastPlay: null, levels: {} };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function touchStreak() {
    const t = todayStr();
    if (state.lastPlay === t) return;
    if (state.lastPlay === yesterdayStr()) state.streak = (state.streak || 0) + 1;
    else state.streak = 1;
    state.lastPlay = t;
    saveState();
  }

  function levelKey(track, id) {
    return track + ":" + id;
  }

  function levelStats(track, id) {
    return state.levels[levelKey(track, id)] || { stars: 0, best: 0, played: false };
  }

  function topics(track) {
    return track === "python" ? window.PYTHON_TOPICS : window.SQL_TOPICS;
  }

  function findTopic(track, id) {
    return topics(track).find((t) => t.id === id);
  }

  function lessonsFor(track) {
    return track === "python" ? window.PYTHON_LESSONS || {} : window.SQL_LESSONS || {};
  }

  function metaFor(track, id) {
    if (window.TOPIC_META && window.TOPIC_META.topicMeta) {
      return window.TOPIC_META.topicMeta(track, id);
    }
    return { accent: "#2c5c50", soft: "#d7e6df" };
  }

  function brand() {
    return window.PRINTER_BRAND || { name: "printer", tagline: "תרגול SQL ופייתון", svg: () => "", lockup: () => "", mark: () => "" };
  }

  function trackProgress(track) {
    const list = topics(track);
    let stars = 0, done = 0;
    list.forEach((t) => {
      const s = levelStats(track, t.id);
      stars += s.stars || 0;
      if (s.played) done += 1;
    });
    return { done, total: list.length, stars, maxStars: list.length * 3 };
  }

  function starsHtml(n) {
    return `<span class="stars">${[1, 2, 3].map((i) =>
      i <= n ? "★" : "<span class=\"empty\">★</span>"
    ).join("")}</span>`;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hebText(s) {
    const esc = escapeHtml(s);
    const wrapped = esc.replace(
      /(?:`([^`]+)`)|((?:[A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[*=<>!%()[\]'/,.@:+\-]+)(?:\s+(?:[A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[*=<>!%()[\]'/,.@:+\-]+))*(?:; )?)([?!]+)?/g,
      (full, tick, run, punct) => {
        const text = (tick || run) + (punct || "");
        if (!/[A-Za-z]/.test(text)) return full;
        return `<span class="ltr" dir="ltr">${text}</span>`;
      }
    );
    return wrapped;
  }

  function hideToast() {
    const el = document.querySelector(".toast");
    if (el) el.classList.remove("show");
  }

  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 1800);
  }

  const GEAR_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="M19.4 13.5a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8.17 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 8.17a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.14.64.73 1.1 1.39 1.1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.4Z"/></svg>`;

  function topbar(opts) {
    opts = opts || {};
    const back = opts.back
      ? `<button class="back" id="btn-back" aria-label="חזרה">→</button>`
      : "";
    const title = opts.lockup
      ? `<div class="top-lockup">${brand().wordmark(28, { onDark: true })}</div>`
      : `<div class="top-lockup compact">
          ${brand().wordmark(24, { onDark: true })}
          <h1>${escapeHtml(opts.title || brand().name)}</h1>
        </div>`;
    const settingsClass = opts.settings ? "icon-btn settings-btn active" : "icon-btn settings-btn";
    const chips = opts.lockup
      ? `<span class="streak-chip" title="רצף ימים">🔥 ${state.streak || 0}</span>
      <span class="xp-chip">⭐ ${state.xp || 0} XP</span>`
      : "";
    return `<header class="topbar">
      ${back}
      ${title}
      ${chips}
      <button class="${settingsClass}" id="btn-settings" aria-label="הגדרות" title="הגדרות">${GEAR_ICON}</button>
    </header>`;
  }

  function bindBack(hash) {
    const b = document.getElementById("btn-back");
    if (b) b.addEventListener("click", () => { location.hash = hash; });
  }

  function bindChrome(backHash) {
    if (backHash) bindBack(backHash);
    const s = document.getElementById("btn-settings");
    if (s) s.addEventListener("click", () => { location.hash = "#settings"; });
  }

  function resetProgress() {
    if (!confirm("לאפס את כל ההתקדמות, הנקודות והרצף?")) return;
    state = defaultState();
    saveState();
    location.hash = "#home";
    setTimeout(() => toast("ההתקדמות אופסה"), 0);
  }

  function renderSettings() {
    hideToast();
    $app.innerHTML = `
      ${topbar({ title: "הגדרות", back: true, settings: true })}
      <div class="screen settings-screen">
        <h2>הגדרות</h2>
        <p class="map-intro">ההתקדמות נשמרת במכשיר בלבד.</p>
        <div class="settings-card">
          <h3>איפוס התקדמות</h3>
          <p>מוחק נקודות, רצף ימים, כוכבים ותוצאות תרגול שנשמרו במכשיר זה. הפעולה לא ניתנת לביטול.</p>
          <button class="danger-btn" id="btn-reset" type="button">איפוס התקדמות</button>
        </div>
      </div>`;
    bindChrome("#home");
    document.getElementById("btn-reset").onclick = resetProgress;
  }

  function modeTabs(track, mode) {
    return `<div class="mode-tabs" role="tablist">
      <button type="button" class="${mode === "learn" ? "active" : ""}" id="tab-learn" role="tab" aria-selected="${mode === "learn"}">למידה</button>
      <button type="button" class="${mode === "practice" ? "active" : ""}" id="tab-practice" role="tab" aria-selected="${mode === "practice"}">תרגול</button>
    </div>`;
  }

  function bindModeTabs(track) {
    const learn = document.getElementById("tab-learn");
    const practice = document.getElementById("tab-practice");
    if (learn) learn.onclick = () => { location.hash = "#" + track + "/learn"; };
    if (practice) practice.onclick = () => { location.hash = "#" + track + "/practice"; };
  }

  /* ---------- views ---------- */
  function renderHome() {
    hideToast();
    const sql = trackProgress("sql");
    const py = trackProgress("python");
    $app.innerHTML = `
      ${topbar({ title: brand().name, back: false, lockup: true })}
      <div class="screen">
        <div class="brand">
          ${brand().wordmark(52)}
          <p class="brand-tagline">${escapeHtml(brand().tagline)}</p>
        </div>
        <div class="stats-row">
          <div class="stat"><div class="k">נקודות</div><div class="v">${state.xp || 0} XP</div></div>
          <div class="stat"><div class="k">רצף ימים</div><div class="v">${state.streak || 0} 🔥</div></div>
          <div class="stat"><div class="k">כוכבים</div><div class="v">${sql.stars + py.stars}</div></div>
        </div>
        <div class="section-label">בחרו תחום</div>
        <div class="track-grid">
          <button class="track-card sql" id="go-sql">
            <div class="track-icon">🗄</div>
            <div style="flex:1">
              <h3>SQL</h3>
              <p>${sql.done}/${sql.total} נושאים בתרגול · ${sql.stars} כוכבים</p>
              <div class="progress-mini"><span style="width:${(sql.stars / sql.maxStars) * 100}%"></span></div>
            </div>
          </button>
          <button class="track-card py" id="go-py">
            <div class="track-icon">🐍</div>
            <div style="flex:1">
              <h3>פייתון</h3>
              <p>${py.done}/${py.total} נושאים בתרגול · ${py.stars} כוכבים</p>
              <div class="progress-mini"><span style="width:${(py.stars / py.maxStars) * 100}%"></span></div>
            </div>
          </button>
        </div>
      </div>`;
    bindChrome();
    document.getElementById("go-sql").onclick = () => (location.hash = "#sql/learn");
    document.getElementById("go-py").onclick = () => (location.hash = "#python/learn");
  }

  function renderMap(track, mode) {
    hideToast();
    mode = mode === "practice" ? "practice" : "learn";
    const isPy = track === "python";
    const list = topics(track);
    const prog = trackProgress(track);
    const intro = mode === "learn"
      ? "בחרו נושא לשיעור. כל פריט מוסבר עם דוגמה. הלמידה לא פותחת תרגול אוטומטית."
      : `בחרו נושא לתרגול. בכל סבב מופיעות עד ${SESSION_SIZE} שאלות אקראיות מתוך מאגר הנושא. ${prog.done} מתוך ${prog.total} נושאים כבר תורגלו · ${prog.stars} כוכבים.`;
    $app.innerHTML = `
      ${topbar({ title: isPy ? (mode === "learn" ? "למידת פייתון" : "תרגול פייתון") : (mode === "learn" ? "למידת SQL" : "תרגול SQL"), back: true })}
      <div class="screen">
        ${modeTabs(track, mode)}
        <p class="map-intro">${intro}</p>
        <div class="level-list colorful ${isPy ? "py" : ""}">
          ${list.map((t) => {
            const s = levelStats(track, t.id);
            const meta = metaFor(track, t.id);
            const n = t.questions.length;
            const sub = mode === "learn"
              ? "הסברים ודוגמאות"
              : `${SESSION_SIZE} שאלות בסבב · מאגר ${n}` + (s.played ? " · שיא " + Math.round((s.best || 0) * 100) + "%" : "");
            return `<button class="level-node" data-id="${t.id}">
              <div class="level-dot">${escapeHtml(t.icon)}</div>
              <div style="flex:1">
                <h3>${escapeHtml(t.title)}</h3>
                <p>${sub}</p>
              </div>
              ${mode === "practice" ? starsHtml(s.stars || 0) : ""}
            </button>`;
          }).join("")}
        </div>
      </div>`;
    bindChrome("#home");
    bindModeTabs(track);
    $app.querySelectorAll(".level-node").forEach((btn) => {
      btn.onclick = () => {
        if (mode === "learn") location.hash = `#learn/${track}/${btn.dataset.id}`;
        else startLevel(track, btn.dataset.id);
      };
    });
  }

  function renderLesson(track, topicId) {
    hideToast();
    const topic = findTopic(track, topicId);
    if (!topic) return (location.hash = "#" + track + "/learn");
    const lesson = lessonsFor(track)[topicId] || { intro: topic.intro || "", items: [] };
    const isPy = track === "python";
    $app.innerHTML = `
      ${topbar({ title: topic.short || topic.title, back: true })}
      <div class="screen lesson-screen">
        <div class="lesson-hero">
          <div class="level-dot">${escapeHtml(topic.icon)}</div>
          <div>
            <h2>${escapeHtml(topic.title)}</h2>
            <p>${escapeHtml(lesson.intro || topic.intro || "")}</p>
          </div>
        </div>
        ${(lesson.items || []).map((it, idx) => `
          <article class="lesson-item" data-idx="${idx}">
            <h3><span class="term" dir="ltr">${escapeHtml(it.term || "")}</span> ${escapeHtml(it.title || "")}</h3>
            <p>${escapeHtml(it.text || "")}</p>
            ${it.code ? `<pre class="code">${escapeHtml(it.code)}</pre>` : ""}
            <div class="lesson-sample" data-run="${it.run ? "1" : "0"}" data-idx="${idx}">
              ${it.run ? `<div class="sample-label">תוצאה על המסד לדוגמה</div><div class="sample-body"><span class="muted">מריץ…</span></div>`
                       : (it.sample ? `<div class="sample-label">תוצאה לדוגמה</div>${/[֐-׿]/.test(it.sample) ? `<p class="sample-note">${escapeHtml(it.sample)}</p>` : `<pre class="code sample-static">${escapeHtml(it.sample)}</pre>`}` : "")}
            </div>
          </article>
        `).join("")}
        <div class="lesson-footer">
          <button class="primary-btn ${isPy ? "py" : ""}" id="go-practice-topic">לתרגול הנושא</button>
          <button class="ghost-btn" id="back-learn-map">חזרה לנושאים</button>
        </div>
      </div>`;
    bindChrome("#" + track + "/learn");
    document.getElementById("go-practice-topic").onclick = () => startLevel(track, topicId);
    document.getElementById("back-learn-map").onclick = () => (location.hash = "#" + track + "/learn");
    if (!isPy) hydrateLessonExamples(lesson.items || []);
  }

  async function hydrateLessonExamples(items) {
    const nodes = [...document.querySelectorAll('.lesson-sample[data-run="1"]')];
    if (!nodes.length) return;
    try {
      const engine = await ensureSql();
      const db = window.SQLEngine.createDb(engine, window.SQL_SCHEMA.SCHEMA_SQL);
      nodes.forEach((node) => {
        const idx = Number(node.dataset.idx);
        const it = items[idx];
        const body = node.querySelector(".sample-body") || node;
        try {
          const rows = db.exec(it.code || "");
          const last = rows && rows.length ? rows[rows.length - 1] : { columns: [], values: [] };
          const res = { columns: last.columns || [], values: last.values || [] };
          body.innerHTML = renderTable(res);
        } catch (err) {
          body.innerHTML = `<p class="q-note">לא ניתן להריץ את הדוגמה במנוע (SQLite): ${escapeHtml(err.message)}</p>`;
        }
      });
      db.close();
    } catch (err) {
      nodes.forEach((node) => {
        const body = node.querySelector(".sample-body") || node;
        body.innerHTML = `<p class="q-note">${escapeHtml(err.message)}</p>`;
      });
    }
  }

  function startLevel(track, topicId) {
    const topic = findTopic(track, topicId);
    if (!topic) return (location.hash = "#" + track + "/practice");
    const quiz = window.Quiz ? window.Quiz.pickQuiz(topic.questions, SESSION_SIZE) : topic.questions.slice(0, SESSION_SIZE);
    session = {
      track,
      topicId,
      index: 0,
      firstTry: {},
      answered: {},
      hintUsed: {},
      started: Date.now(),
      quiz,
    };
    location.hash = `#play/${track}/${topicId}`;
    renderPlay();
  }

  function currentQ() {
    const topic = findTopic(session.track, session.topicId);
    const quiz = session.quiz || topic.questions;
    return { topic, q: quiz[session.index], total: quiz.length, quiz };
  }

  function renderPlay() {
    hideToast();
    if (!session) return renderHome();
    const { topic, q, total } = currentQ();
    const isPy = session.track === "python";
    const i = session.index;
    const done = session.answered[q.id];
    $app.innerHTML = `
      ${topbar({ title: topic.short, back: true })}
      <div class="screen">
        <div class="q-progress ${isPy ? "py" : ""}">
          <div class="q-bar"><span style="width:${((i + (done ? 1 : 0)) / total) * 100}%"></span></div>
          <div class="q-count">שאלה ${i + 1} מתוך ${total}</div>
        </div>
        <div class="q-card" id="q-card">
          <span class="q-type">${TYPE_LABELS[q.type] || q.type}</span>
          <p class="q-prompt">${hebText(q.prompt)}</p>
          ${q.note ? `<p class="q-note">${escapeHtml(q.note)}</p>` : ""}
          ${q.code ? `<pre class="code">${escapeHtml(q.code)}</pre>` : ""}
          ${q.template && q.type === "fill" ? `<pre class="code">${escapeHtml(q.template)}</pre>` : ""}
          <div id="q-body"></div>
          <div class="btn-row" id="q-actions"></div>
          <div id="q-extra"></div>
        </div>
      </div>`;
    bindChrome("#" + session.track + "/practice");
    document.getElementById("btn-back").onclick = () => {
      if (confirm("לצאת מהתרגול? ההתקדמות בסבב הזה תישמר רק אם סיימתם אותו.")) {
        session = null;
        location.hash = "#" + (isPy ? "python" : "sql") + "/practice";
      }
    };
    mountQuestion(q, done);
  }

  function mountQuestion(q, already) {
    const body = document.getElementById("q-body");
    const actions = document.getElementById("q-actions");
    const extra = document.getElementById("q-extra");
    const isPy = session.track === "python";

    if (q.type === "mcq" || q.type === "predict") {
      body.innerHTML = `<div class="choices"></div>`;
      const box = body.querySelector(".choices");
      q.choices.forEach((c, idx) => {
        const b = document.createElement("button");
        b.className = "choice" + (looksLikeCode(c) ? " ltr" : "");
        b.type = "button";
        b.dataset.idx = String(idx);
        b.innerHTML = looksLikeCode(c) ? `<span class="mono" dir="ltr">${escapeHtml(c)}</span>` : escapeHtml(c);
        if (already) {
          b.disabled = true;
          if (idx === q.answer) b.classList.add("correct");
          if (already.choice === idx && idx !== q.answer) b.classList.add("wrong");
          if (already.choice === idx) b.classList.add("selected");
        }
        b.onclick = () => {
          box.querySelectorAll(".choice").forEach((x) => x.classList.remove("selected"));
          b.classList.add("selected");
          box.dataset.sel = String(idx);
        };
        box.appendChild(b);
      });
    } else if (q.type === "fill") {
      const n = q.blanks.length;
      body.innerHTML = `<div class="fill-row">${q.blanks.map((_, i) =>
        `<div class="fill-slot"><label>חסר ${i + 1}</label><input class="code" data-i="${i}" autocapitalize="off" autocomplete="off" spellcheck="false" ${already ? "disabled" : ""}></div>`
      ).join("")}</div>`;
      if (already && already.values) {
        body.querySelectorAll("input").forEach((inp, i) => { inp.value = already.values[i] || ""; });
      }
    } else if (q.type === "write") {
      const starter = q.starter || "";
      body.innerHTML = `
        <textarea class="code" id="code-area" autocapitalize="off" spellcheck="false" ${already ? "disabled" : ""}>${escapeHtml(already && already.code != null ? already.code : starter)}</textarea>
        ${!isPy ? `<p class="q-note" style="margin-top:8px">אפשר להריץ תצוגה מקדימה לפני הבדיקה. כשמבקשים עמודות מסוימות — בחרו אותן באותו סדר.</p>` : ""}
      `;
    }

    if (!already) {
      if (q.type === "write" && !isPy) {
        const run = document.createElement("button");
        run.className = "ghost-btn";
        run.textContent = "הרצה";
        run.onclick = () => previewSql(q, document.getElementById("code-area").value);
        actions.appendChild(run);
      }
      const hintBtn = document.createElement("button");
      hintBtn.className = "ghost-btn";
      hintBtn.textContent = "רמז";
      hintBtn.onclick = () => {
        session.hintUsed[q.id] = true;
        extra.insertAdjacentHTML("beforeend", `<div class="hint-box"><b>רמז: </b>${escapeHtml(q.hint || "נסו שוב, בקצב שלכם.")}</div>`);
        hintBtn.disabled = true;
      };
      actions.appendChild(hintBtn);

      if (!isPy) {
        const dataBtn = document.createElement("button");
        dataBtn.className = "ghost-btn";
        dataBtn.textContent = "הצג טבלאות";
        dataBtn.onclick = () => showTables(extra, dataBtn);
        actions.appendChild(dataBtn);
      }

      const check = document.createElement("button");
      check.className = "primary-btn" + (isPy ? " py" : "");
      check.id = "btn-check";
      check.textContent = "בדיקה";
      check.onclick = () => submitQuestion(q);
      actions.appendChild(check);
    } else {
      showFeedback(q, already);
      addNext(actions, isPy);
    }
  }

  function looksLikeCode(s) {
    return /SELECT|FROM|WHERE|def |print\(|=>|::|\(\)|[{};]|LIKE |NULL/i.test(s) && s.length < 280;
  }

  async function ensureSql() {
    if (SQL) return SQL;
    if (!sqlReady) {
      sqlReady = initSqlJs({ locateFile: (f) => (window.APP_BASE || "") + "vendor/" + f }).then((mod) => {
        SQL = mod;
        return SQL;
      });
    }
    return sqlReady;
  }

  async function showTables(extra, btn) {
    btn.disabled = true;
    try {
      const engine = await ensureSql();
      const db = window.SQLEngine.createDb(engine, window.SQL_SCHEMA.SCHEMA_SQL);
      let html = `<div class="tables-box">`;
      for (const t of window.SQL_SCHEMA.TABLE_INFO) {
        const res = window.SQLEngine.resultFromExec(db, "SELECT * FROM " + t.name);
        html += `<h4>${escapeHtml(t.title)} · <span class="mono">${t.name}</span></h4>` + renderTable(res);
      }
      html += `</div>`;
      extra.insertAdjacentHTML("afterbegin", html);
      db.close();
    } catch (err) {
      extra.insertAdjacentHTML("afterbegin", `<div class="hint-box">לא הצלחתי לטעון את הטבלאות: ${escapeHtml(err.message)}</div>`);
      btn.disabled = false;
    }
  }

  function renderTable(res) {
    if (!res || !res.columns.length) {
      return `<p class="q-note">אין שורות בתוצאה.</p>`;
    }
    const head = res.columns.map((c) => `<th>${escapeHtml(c)}</th>`).join("");
    const body = res.values.map((row) =>
      `<tr>${row.map((v) =>
        v == null ? `<td class="null">NULL</td>` : `<td>${escapeHtml(v)}</td>`
      ).join("")}</tr>`
    ).join("");
    return `<div class="table-wrap"><table class="result-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  async function previewSql(q, sql) {
    const extra = document.getElementById("q-extra");
    const old = extra.querySelector(".preview-box");
    if (old) old.remove();
    try {
      const engine = await ensureSql();
      const out = window.SQLEngine.runPreview(engine, window.SQL_SCHEMA.SCHEMA_SQL, sql);
      if (!out.ok) {
        extra.insertAdjacentHTML("afterbegin", `<div class="feedback bad preview-box"><b>שגיאה בהרצה: </b>${escapeHtml(out.error)}</div>`);
        return;
      }
      extra.insertAdjacentHTML("afterbegin", `<div class="tables-box preview-box"><h4>תצוגה מקדימה</h4>${renderTable(out.result)}</div>`);
    } catch (err) {
      extra.insertAdjacentHTML("afterbegin", `<div class="feedback bad preview-box">${escapeHtml(err.message)}</div>`);
    }
  }

  function normalizeFill(s) {
    return String(s || "").trim().replace(/\s+/g, " ").replace(/;$/, "");
  }

  function fillsOk(q, values) {
    if (q.acceptAnyName) {
      return values.length && values.every((v) => /^[A-Za-z_][A-Za-z0-9_]*$/.test(String(v).trim()));
    }
    return q.blanks.every((accepted, i) => {
      const got = normalizeFill(values[i]).toLowerCase();
      return accepted.some((a) => normalizeFill(a).toLowerCase() === got);
    });
  }

  async function submitQuestion(q) {
    const checkBtn = document.getElementById("btn-check");
    if (checkBtn) checkBtn.disabled = true;
    let result = { ok: false, choice: null, values: null, code: null, detail: null };
    try {
      if (q.type === "mcq" || q.type === "predict") {
        const box = document.querySelector(".choices");
        if (box.dataset.sel == null) {
          toast("בחרו תשובה קודם");
          if (checkBtn) checkBtn.disabled = false;
          return;
        }
        const choice = Number(box.dataset.sel);
        result.ok = choice === q.answer;
        result.choice = choice;
        box.querySelectorAll(".choice").forEach((b, idx) => {
          b.disabled = true;
          if (idx === q.answer) b.classList.add("correct");
          if (idx === choice && idx !== q.answer) b.classList.add("wrong");
        });
      } else if (q.type === "fill") {
        const values = [...document.querySelectorAll(".fill-row input")].map((i) => i.value);
        result.values = values;
        result.ok = fillsOk(q, values);
        document.querySelectorAll(".fill-row input").forEach((i) => (i.disabled = true));
      } else if (q.type === "write") {
        const code = document.getElementById("code-area").value;
        result.code = code;
        document.getElementById("code-area").disabled = true;
        if (session.track === "sql") {
          const engine = await ensureSql();
          const grade = window.SQLEngine.gradeSql(engine, window.SQL_SCHEMA.SCHEMA_SQL, q, code);
          result.ok = !!grade.ok;
          result.detail = grade;
        } else {
          toast("טוען את מנוע פייתון…");
          const grade = await window.PythonEngine.gradePython(q, code, () => {});
          result.ok = !!grade.ok;
          result.detail = grade;
        }
      }
    } catch (err) {
      result.ok = false;
      result.detail = { error: err.message };
    }

    if (session.firstTry[q.id] === undefined) session.firstTry[q.id] = result.ok;
    session.answered[q.id] = result;
    if (result.ok) {
      const first = session.firstTry[q.id];
      const gained = first ? 10 : 5;
      state.xp = (state.xp || 0) + gained;
      touchStreak();
      saveState();
      const xpChip = document.querySelector(".xp-chip");
      const stChip = document.querySelector(".streak-chip");
      if (xpChip) xpChip.textContent = "⭐ " + (state.xp || 0) + " XP";
      if (stChip) stChip.textContent = "🔥 " + (state.streak || 0);
      toast("+" + gained + " XP");
    }
    const actions = document.getElementById("q-actions");
    actions.innerHTML = "";
    showFeedback(q, result);
    addNext(actions, session.track === "python");
  }

  function showFeedback(q, result) {
    const extra = document.getElementById("q-extra");
    const ok = !!result.ok;
    let html = `<div class="feedback ${ok ? "ok" : "bad"}"><h4>${ok ? "כל הכבוד!" : "עוד לא, בואו נראה למה"}</h4>`;
    html += `<div class="explain">${escapeHtml(q.explanation || "")}</div>`;
    if (!ok && q.expectedSql) {
      html += `<p>פתרון לדוגמה:</p><pre class="code">${escapeHtml(q.expectedSql)}</pre>`;
    }
    if (!ok && q.solution) {
      html += `<p>פתרון לדוגמה:</p><pre class="code">${escapeHtml(q.solution)}</pre>`;
    }
    if (result.detail) {
      const d = result.detail;
      if (d.error && !d.studentResult && session.track === "sql") {
        html += `<p>שגיאה: <span class="mono">${escapeHtml(d.error)}</span></p>`;
      }
      if (d.studentResult || d.expectedResult) {
        html += `<p><b>התוצאה שלכם</b></p>${renderTable(d.studentResult || { columns: [], values: [] })}`;
        if (!ok) html += `<p><b>התוצאה הצפויה</b></p>${renderTable(d.expectedResult || { columns: [], values: [] })}`;
      }
      if (session.track === "python" && q.type === "write") {
        if (d.error) html += `<pre class="code">${escapeHtml(shortErr(d.error))}</pre>`;
        if (d.expectedStdout != null) {
          html += `<p><b>הפלט שלכם</b></p><pre class="code">${escapeHtml(d.stdout || "—")}</pre>`;
          if (!ok) html += `<p><b>הפלט הצפוי</b></p><pre class="code">${escapeHtml(d.expectedStdout)}</pre>`;
        }
        if (d.tests && d.tests.length) {
          html += d.tests.map((t) => {
            if (t.kind === "stdout") {
              return `<p>${t.ok ? "✓" : "✗"} פלט ${t.ok ? "תואם" : "לא תואם"}</p>`;
            }
            return `<p>${t.ok ? "✓" : "✗"} <span class="mono">${escapeHtml(t.expr || "")}</span> ${t.ok ? "" : "— התקבל " + escapeHtml(JSON.stringify(t.got)) + ", צפוי " + escapeHtml(JSON.stringify(t.expected))}</p>`;
          }).join("");
        }
      }
    }
    html += `</div>`;

    extra.insertAdjacentHTML("beforeend", html);
  }

  function shortErr(e) {
    const lines = String(e).trim().split("\n");
    return lines.slice(-8).join("\n");
  }

  function addNext(actions, isPy) {
    const { quiz } = currentQ();
    const btn = document.createElement("button");
    btn.className = "primary-btn" + (isPy ? " py" : "");
    const last = session.index >= quiz.length - 1;
    btn.textContent = last ? "סיכום הסבב" : "לשאלה הבאה";
    btn.onclick = () => {
      if (last) finishLevel();
      else {
        session.index += 1;
        renderPlay();
        window.scrollTo(0, 0);
      }
    };
    actions.appendChild(btn);
  }

  function finishLevel() {
    const { topic, quiz } = currentQ();
    const total = quiz.length;
    let firstOk = 0;
    quiz.forEach((q) => {
      if (session.firstTry[q.id]) firstOk += 1;
    });
    const ratio = total ? firstOk / total : 0;
    const stars = ratio >= 1 ? 3 : ratio >= 0.8 ? 2 : ratio >= 0.6 ? 1 : 0;
    const key = levelKey(session.track, session.topicId);
    const prev = state.levels[key] || { stars: 0, best: 0, played: false };
    const best = Math.max(prev.best || 0, ratio);
    const bestStars = Math.max(prev.stars || 0, stars);
    state.levels[key] = { stars: bestStars, best, played: true };
    state.xp = (state.xp || 0) + 20 + (stars === 3 ? 30 : stars === 2 ? 10 : 0);
    touchStreak();
    saveState();
    const track = session.track;
    session = null;
    $app.innerHTML = `
      ${topbar({ title: "סיום סבב", back: true })}
      <div class="screen">
        <div class="card complete">
          <div class="big-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
          <h2>${escapeHtml(topic.title)}</h2>
          <p>בפעם הראשונה עניתם נכון על ${firstOk} מתוך ${total} (${Math.round(ratio * 100)}%).</p>
          <p>נשמרו ${bestStars} כוכבים לנושא הזה.</p>
          <div class="btn-row">
            <button class="primary-btn ${track === "python" ? "py" : ""}" id="back-map">חזרה לתרגול</button>
            <button class="ghost-btn" id="retry">סבב חדש</button>
            <button class="ghost-btn" id="to-lesson">לשיעור</button>
          </div>
        </div>
      </div>`;
    bindChrome("#" + track + "/practice");
    document.getElementById("back-map").onclick = () => (location.hash = "#" + track + "/practice");
    document.getElementById("retry").onclick = () => startLevel(track, topic.id);
    document.getElementById("to-lesson").onclick = () => (location.hash = `#learn/${track}/${topic.id}`);
  }

  function completeQuizForShot() {
    if (!session) return;
    const { quiz } = currentQ();
    quiz.forEach((q) => {
      if (session.firstTry[q.id] === undefined) session.firstTry[q.id] = true;
      if (!session.answered[q.id]) session.answered[q.id] = { ok: true };
    });
    session.index = Math.max(0, quiz.length - 1);
    finishLevel();
  }

  /* ---------- router ---------- */
  function route() {
    const h = (location.hash || "#home").replace(/^#/, "");
    const parts = h.split("/");
    if (h === "" || h === "home") return renderHome();
    if (h === "settings") return renderSettings();
    if (h === "sql" || h === "sql/learn") return renderMap("sql", "learn");
    if (h === "sql/practice") return renderMap("sql", "practice");
    if (h === "python" || h === "python/learn") return renderMap("python", "learn");
    if (h === "python/practice") return renderMap("python", "practice");
    if (parts[0] === "sheet") return renderMap(parts[1] === "python" ? "python" : "sql", "learn");
    if (parts[0] === "learn" && parts[1] && parts[2]) {
      const track = parts[1] === "python" ? "python" : "sql";
      return renderLesson(track, parts[2]);
    }
    if (parts[0] === "play" && parts[1] && parts[2]) {
      const track = parts[1] === "python" ? "python" : "sql";
      if (!session || session.track !== track || session.topicId !== parts[2]) {
        return startLevel(track, parts[2]);
      }
      return renderPlay();
    }
    renderHome();
  }

  window.addEventListener("hashchange", route);
  window.Printer = window.CodePractice = window.KodMaslul = {
    startLevel,
    finishLevel,
    completeQuizForShot,
    getSession: () => session,
    setSessionIndex(i) { if (session) { session.index = i; renderPlay(); } },
    getState: () => state,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", route);
  } else {
    route();
  }
})();
