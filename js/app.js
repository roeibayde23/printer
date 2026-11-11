/* printer — Hebrew SQL & Python practice game */
(function () {
  const STORAGE_KEY = "printer-v1";
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
      /(?:`([^`]+)`)|((?:[A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[*=<>!%()[\]'/,.@:+\-]+)(?:\s+(?:[A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[*=<>!%()[\]'/,.@:+\-]+))*(?:; )?)/g,
      (full, tick, run) => {
        const text = tick || run;
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

  function topbar(opts) {
    const back = opts.back
      ? `<button class="back" id="btn-back" aria-label="חזרה">→</button>`
      : `<span style="width:40px"></span>`;
    return `<header class="topbar">
      ${back}
      <h1>${escapeHtml(opts.title || "printer")}</h1>
      <span class="streak-chip" title="רצף ימים">🔥 ${state.streak || 0}</span>
      <span class="xp-chip">⭐ ${state.xp || 0} XP</span>
    </header>`;
  }

  function bindBack(hash) {
    const b = document.getElementById("btn-back");
    if (b) b.addEventListener("click", () => { location.hash = hash; });
  }

  /* ---------- views ---------- */
  function renderHome() {
    hideToast();
    const sql = trackProgress("sql");
    const py = trackProgress("python");
    $app.innerHTML = `
      ${topbar({ title: "printer", back: false })}
      <div class="screen">
        <div class="brand">
          <div class="brand-mark">&lt;/&gt;</div>
          <div>
            <h2>printer</h2>
            <p>תרגול SQL ופייתון, בקצב שלכם</p>
          </div>
        </div>
        <div class="stats-row">
          <div class="stat"><div class="k">נקודות</div><div class="v">${state.xp || 0} XP</div></div>
          <div class="stat"><div class="k">רצף ימים</div><div class="v">${state.streak || 0} 🔥</div></div>
          <div class="stat"><div class="k">כוכבים</div><div class="v">${sql.stars + py.stars}</div></div>
        </div>
        <div class="section-label">בחרו תחום תרגול</div>
        <div class="track-grid">
          <button class="track-card sql" id="go-sql">
            <div class="track-icon">🗄</div>
            <div style="flex:1">
              <h3>SQL</h3>
              <p>${sql.done}/${sql.total} שלבים · ${sql.stars} כוכבים</p>
              <div class="progress-mini"><span style="width:${(sql.stars / sql.maxStars) * 100}%"></span></div>
            </div>
          </button>
          <button class="track-card py" id="go-py">
            <div class="track-icon">🐍</div>
            <div style="flex:1">
              <h3>פייתון</h3>
              <p>${py.done}/${py.total} שלבים · ${py.stars} כוכבים</p>
              <div class="progress-mini"><span style="width:${(py.stars / py.maxStars) * 100}%"></span></div>
            </div>
          </button>
        </div>
        <div class="sheet-row">
          <button class="ghost-btn" id="go-sheet-sql">גיליון SQL</button>
          <button class="ghost-btn" id="go-sheet-py">גיליון פייתון</button>
        </div>
        <p style="margin:18px 0 0;font-size:12px;color:var(--muted);text-align:center">
          מנוע SQL רץ במכשיר (SQLite). כתיבת פייתון דורשת טעינה חד-פעמית מהרשת.
          <br><button class="ghost-btn" id="btn-reset" style="margin-top:10px;font-size:12px;padding:8px 12px">איפוס התקדמות</button>
        </p>
      </div>`;
    document.getElementById("go-sql").onclick = () => (location.hash = "#sql");
    document.getElementById("go-py").onclick = () => (location.hash = "#python");
    document.getElementById("go-sheet-sql").onclick = () => (location.hash = "#sheet/sql");
    document.getElementById("go-sheet-py").onclick = () => (location.hash = "#sheet/python");
    document.getElementById("btn-reset").onclick = () => {
      if (confirm("לאפס את כל ההתקדמות, הנקודות והרצף?")) {
        state = defaultState();
        saveState();
        renderHome();
        toast("ההתקדמות אופסה");
      }
    };
  }

  function renderMap(track) {
    hideToast();
    const isPy = track === "python";
    const list = topics(track);
    const prog = trackProgress(track);
    $app.innerHTML = `
      ${topbar({ title: isPy ? "תרגול פייתון" : "תרגול SQL", back: true })}
      <div class="screen">
        <p class="map-intro">${prog.done} מתוך ${prog.total} שלבים · ${prog.stars} כוכבים. כל השלבים פתוחים — אפשר להתחיל מכל נושא.</p>
        <div class="level-list ${isPy ? "py" : ""}">
          ${list.map((t, i) => {
            const s = levelStats(track, t.id);
            return `<button class="level-node" data-id="${t.id}">
              <div class="level-dot">${escapeHtml(t.icon)}</div>
              <div style="flex:1">
                <h3>${escapeHtml(t.title)}</h3>
                <p>${t.questions.length} שאלות ${s.played ? "· ניסיון קודם " + Math.round((s.best || 0) * 100) + "%" : ""}</p>
              </div>
              ${starsHtml(s.stars || 0)}
            </button>`;
          }).join("")}
        </div>
        <button class="ghost-btn" id="go-sheet" style="width:100%">גיליון עזר</button>
      </div>`;
    bindBack("#home");
    $app.querySelectorAll(".level-node").forEach((btn) => {
      btn.onclick = () => startLevel(track, btn.dataset.id);
    });
    document.getElementById("go-sheet").onclick = () => (location.hash = "#sheet/" + track);
  }

  function renderSheet(track) {
    hideToast();
    const isPy = track === "python";
    const items = isPy ? window.CHEATSHEETS.PYTHON_SHEET : window.CHEATSHEETS.SQL_SHEET;
    $app.innerHTML = `
      ${topbar({ title: isPy ? "גיליון פייתון" : "גיליון SQL", back: true })}
      <div class="screen">
        <p class="map-intro">סיכום קצר של הנושאים. הקישו על כותרת כדי לפתוח.</p>
        ${items.map((it, i) => `
          <div class="acc ${i === 0 ? "open" : ""}">
            <button type="button">${escapeHtml(it.title)}</button>
            <div class="acc-body">${it.body}</div>
          </div>`).join("")}
      </div>`;
    bindBack("#" + (isPy ? "python" : "sql"));
    $app.querySelectorAll(".acc > button").forEach((btn) => {
      btn.onclick = () => btn.parentElement.classList.toggle("open");
    });
  }

  function startLevel(track, topicId) {
    const topic = findTopic(track, topicId);
    if (!topic) return (location.hash = "#" + track);
    session = {
      track,
      topicId,
      index: 0,
      firstTry: {},
      answered: {},
      hintUsed: {},
      started: Date.now(),
    };
    location.hash = `#play/${track}/${topicId}`;
    renderPlay();
  }

  function currentQ() {
    const topic = findTopic(session.track, session.topicId);
    return { topic, q: topic.questions[session.index], total: topic.questions.length };
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
    bindBack("#" + session.track);
    document.getElementById("btn-back").onclick = () => {
      if (confirm("לצאת מהשלב? ההתקדמות בשלב הזה תישמר רק אם סיימתם אותו.")) {
        session = null;
        location.hash = "#" + (isPy ? "python" : "sql");
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
    const { topic } = currentQ();
    const btn = document.createElement("button");
    btn.className = "primary-btn" + (isPy ? " py" : "");
    const last = session.index >= topic.questions.length - 1;
    btn.textContent = last ? "סיכום השלב" : "לשאלה הבאה";
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
    const { topic } = currentQ();
    const total = topic.questions.length;
    let firstOk = 0;
    topic.questions.forEach((q) => {
      if (session.firstTry[q.id]) firstOk += 1;
    });
    const ratio = firstOk / total;
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
      ${topbar({ title: "סיום שלב", back: true })}
      <div class="screen">
        <div class="card complete">
          <div class="big-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
          <h2>${escapeHtml(topic.title)}</h2>
          <p>בפעם הראשונה עניתם נכון על ${firstOk} מתוך ${total} (${Math.round(ratio * 100)}%).</p>
          <p>נשמרו ${bestStars} כוכבים לשלב הזה.</p>
          <div class="btn-row">
            <button class="primary-btn ${track === "python" ? "py" : ""}" id="back-map">חזרה למפה</button>
            <button class="ghost-btn" id="retry">לתרגל שוב</button>
          </div>
        </div>
      </div>`;
    bindBack("#" + track);
    document.getElementById("back-map").onclick = () => (location.hash = "#" + track);
    document.getElementById("retry").onclick = () => startLevel(track, topic.id);
  }

  /* ---------- router ---------- */
  function route() {
    const h = (location.hash || "#home").replace(/^#/, "");
    const parts = h.split("/");
    if (h === "" || h === "home") return renderHome();
    if (h === "sql") return renderMap("sql");
    if (h === "python") return renderMap("python");
    if (parts[0] === "sheet") return renderSheet(parts[1] === "python" ? "python" : "sql");
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
