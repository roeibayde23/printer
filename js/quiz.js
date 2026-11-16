/* Pick a random subset of questions for one practice session. */
(function (root) {
  const SESSION_SIZE = 6;
  const MIN_WRITES = 3;
  const TARGET_WRITES = 4;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function pickQuiz(questions, n) {
    const size = Math.min(n == null ? SESSION_SIZE : n, questions.length);
    const writes = questions.filter((q) => q.type === "write");
    const rest = questions.filter((q) => q.type !== "write");
    let nWrite = Math.min(writes.length, size);
    if (size >= 6) {
      const want = writes.length >= TARGET_WRITES ? TARGET_WRITES : Math.min(MIN_WRITES, writes.length);
      nWrite = Math.min(writes.length, Math.max(nWrite ? want : 0, want), size);
    } else {
      nWrite = Math.min(writes.length, Math.max(Math.ceil(size * 0.6), Math.min(MIN_WRITES, writes.length)), size);
    }
    const pickedW = shuffle(writes).slice(0, nWrite);
    const pickedR = shuffle(rest).slice(0, size - pickedW.length);
    // If not enough rest, fill remaining with extra writes
    if (pickedW.length + pickedR.length < size) {
      const used = new Set(pickedW.map((q) => q.id));
      const extra = shuffle(writes.filter((q) => !used.has(q.id))).slice(0, size - pickedW.length - pickedR.length);
      pickedW.push.apply(pickedW, extra);
    }
    return shuffle(pickedW.concat(pickedR));
  }

  function normalizeFill(s) {
    let t = String(s == null ? "" : s).trim();
    t = t.replace(/[\u201C\u201D\u201E\u00AB\u00BB]/g, '"').replace(/[\u2018\u2019]/g, "'");
    t = t.replace(/["']/g, "'");
    t = t.replace(/\s+/g, " ");
    t = t.replace(/\s*\(\s*/g, "(").replace(/\s*\)\s*/g, ")");
    t = t.replace(/\s*,\s*/g, ",");
    t = t.replace(/\s*(===|==|!=|<=|>=)\s*/g, "$1");
    t = t.replace(/\s*=\s*/g, "=");
    t = t.replace(/\s*;+\s*$/g, "");
    return t.toLowerCase();
  }

  function filledTemplates(q) {
    const template = q && q.template != null ? String(q.template) : "";
    const blanks = (q && q.blanks) || [];
    if (!template) return [];
    function combos(i) {
      if (i >= blanks.length) return [[]];
      const rest = combos(i + 1);
      const opts = blanks[i] && blanks[i].length ? blanks[i] : [""];
      const out = [];
      opts.forEach((v) => {
        rest.forEach((r) => out.push([v].concat(r)));
      });
      return out;
    }
    return combos(0).map((vals) => {
      let i = 0;
      return template.replace(/___/g, () => (vals[i++] != null ? String(vals[i - 1]) : ""));
    });
  }

  function valuesMatchBlanks(q, values) {
    const blanks = q.blanks || [];
    return blanks.every((accepted, i) => {
      const got = normalizeFill(values[i]);
      return (accepted || []).some((a) => normalizeFill(a) === got);
    });
  }

  function looksLikeFilledTemplate(q, raw) {
    const got = normalizeFill(raw);
    if (!got) return false;
    return filledTemplates(q).some((tpl) => normalizeFill(tpl) === got);
  }

  function acceptAnyNameOk(q, values) {
    const ident = /^[A-Za-z_][A-Za-z0-9_]*$/;
    const trimmed = (values || []).map((v) => String(v == null ? "" : v).trim()).filter(Boolean);
    if (!trimmed.length) return false;
    if (trimmed.every((v) => ident.test(v))) return true;
    const template = q && q.template ? String(q.template) : "";
    if (!template) return false;
    const escaped = template.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/___/g, "IDENT");
    const pattern = "^" + normalizeFill(escaped).replace(/ident/g, "[a-z_][a-z0-9_]*") + "$";
    try {
      const re = new RegExp(pattern);
      return (values || []).some((v) => re.test(normalizeFill(v))) || re.test(normalizeFill(trimmed.join(" ")));
    } catch (e) {
      return false;
    }
  }

  function fillsOk(q, values) {
    const vals = Array.isArray(values) ? values : [values];
    if (!q) return false;
    if (q.acceptAnyName && acceptAnyNameOk(q, vals)) return true;
    if (q.blanks && q.blanks.length && valuesMatchBlanks(q, vals)) return true;
    if (looksLikeFilledTemplate(q, vals.join(" "))) return true;
    if (vals.some((v) => looksLikeFilledTemplate(q, v))) return true;
    return false;
  }

  const Quiz = { SESSION_SIZE, MIN_WRITES, TARGET_WRITES, shuffle, pickQuiz, normalizeFill, filledTemplates, fillsOk };
  root.Quiz = Quiz;
  if (typeof module !== "undefined" && module.exports) module.exports = Quiz;
})(typeof window !== "undefined" ? window : globalThis);
