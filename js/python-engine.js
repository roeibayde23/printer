/* Browser Python runner (Pyodide). Lazy-loaded from the CDN on first use. */
(function (root) {
  const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.29.5/full/";
  let pyodidePromise = null;
  let pyodide = null;

  function getStatus() {
    if (pyodide) return "ready";
    if (pyodidePromise) return "loading";
    return "idle";
  }

  async function loadPyodideEngine(onStatus) {
    if (pyodide) return pyodide;
    if (pyodidePromise) return pyodidePromise;
    pyodidePromise = (async () => {
      if (onStatus) onStatus("loading");
      if (typeof loadPyodide !== "function") {
        await new Promise((resolve, reject) => {
          const s = document.createElement("script");
          s.src = PYODIDE_CDN + "pyodide.js";
          s.onload = resolve;
          s.onerror = () => reject(new Error("לא הצלחתי לטעון את Pyodide. צריך חיבור לאינטרנט בפעם הראשונה."));
          document.head.appendChild(s);
        });
      }
      const engine = await loadPyodide({
        indexURL: PYODIDE_CDN,
        // Emscripten otherwise sets LANG from navigator.language (e.g. he_IL.UTF-8),
        // which made Pyodide <= 0.27 crash at init_fs_encoding on Hebrew/Arabic locales.
        env: {
          LANG: "C.UTF-8",
          LC_ALL: "C.UTF-8",
          PYTHONIOENCODING: "utf-8",
          PYTHONUTF8: "1",
        },
        args: ["-X", "utf8"],
      });
      pyodide = engine;
      if (onStatus) onStatus("ready");
      return engine;
    })();
    try {
      return await pyodidePromise;
    } catch (err) {
      pyodidePromise = null;
      if (onStatus) onStatus("error");
      throw err;
    }
  }

  function normalizeStdout(s) {
    return String(s || "")
      .replace(/\r\n/g, "\n")
      .replace(/\s+$/g, "")
      .replace(/[ \t]+\n/g, "\n");
  }

  function valuesEqual(a, b) {
    if (a === b) return true;
    if (typeof a === "number" && typeof b === "number") {
      return Math.abs(a - b) < 1e-9;
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      return a.every((v, i) => valuesEqual(v, b[i]));
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
      const ka = Object.keys(a).sort();
      const kb = Object.keys(b).sort();
      if (ka.length !== kb.length) return false;
      return ka.every((k, i) => k === kb[i] && valuesEqual(a[k], b[k]));
    }
    return String(a) === String(b);
  }

  const loadedPkgs = new Set();

  function neededPackages(question, code) {
    const listed = (question && question.packages) || [];
    const blob = [code || "", (question && question.solution) || "", (question && question.starter) || ""].join("\n");
    const need = new Set(listed);
    if (/\bnumpy\b|\bnp\./.test(blob) || /import\s+numpy/.test(blob)) need.add("numpy");
    if (/\bpandas\b|\bpd\./.test(blob) || /import\s+pandas/.test(blob)) {
      need.add("numpy");
      need.add("pandas");
    }
    return Array.from(need);
  }

  async function ensurePackages(engine, pkgs, onStatus) {
    const missing = pkgs.filter((p) => !loadedPkgs.has(p));
    if (!missing.length) return;
    if (onStatus) onStatus("loading");
    await engine.loadPackage(missing);
    missing.forEach((p) => loadedPkgs.add(p));
    if (onStatus) onStatus("ready");
  }

  function engineErrorResult(err) {
    return {
      ok: false,
      engineError: true,
      error: err && (err.message || String(err)) || "engine",
      stdout: "",
      expectedStdout: "",
      tests: [],
    };
  }

  async function gradePython(question, studentCode, onStatus) {
    let engine;
    try {
      engine = await loadPyodideEngine(onStatus);
    } catch (err) {
      return engineErrorResult(err);
    }
    const code = String(studentCode || "");
    try {
      await ensurePackages(engine, neededPackages(question, code), onStatus);
    } catch (err) {
      return engineErrorResult(err);
    }
    if (!code.trim()) {
      return { ok: false, error: "empty", stdout: "", expectedStdout: "", tests: [] };
    }
    const stdin = question.stdin != null ? String(question.stdin) : "";
    engine.globals.set("_user_code", code);
    engine.globals.set("_stdin_data", stdin);
    const tests = question.tests || [];
    engine.globals.set("_test_exprs", tests.map((t) => t.expr || t.call || ""));

    const raw = await engine.runPythonAsync(`
import sys, io, json, traceback

_out = io.StringIO()
_ns = {"__name__": "__main__"}
_old_in, _old_out, _old_err = sys.stdin, sys.stdout, sys.stderr
sys.stdin = io.StringIO(_stdin_data)
sys.stdout = _out
sys.stderr = _out
_payload = {"ok": False, "error": None, "stdout": "", "results": []}
try:
    exec(_user_code, _ns)
    _payload["stdout"] = _out.getvalue()
    _exprs = list(_test_exprs)
    for _e in _exprs:
        if not _e:
            _payload["results"].append({"ok": True, "value": None, "error": None})
            continue
        _val = eval(_e, _ns)
        def _jsonable(v):
            try:
                import numpy as _np
                if isinstance(v, _np.ndarray):
                    v = v.tolist()
                elif isinstance(v, _np.generic):
                    v = v.item()
            except Exception:
                pass
            try:
                import pandas as _pd
                if isinstance(v, _pd.Series):
                    v = [None if _pd.isna(x) else x for x in v.tolist()]
            except Exception:
                pass
            try:
                return json.loads(json.dumps(v))
            except TypeError:
                return str(v)
        try:
            _json = _jsonable(_val)
        except Exception:
            _json = str(_val)
        _payload["results"].append({"ok": True, "value": _json, "error": None})
    _payload["ok"] = True
except Exception as _ex:
    _payload["error"] = "".join(traceback.format_exception(type(_ex), _ex, _ex.__traceback__))
    _payload["stdout"] = _out.getvalue()
    _payload["ok"] = False
finally:
    sys.stdin, sys.stdout, sys.stderr = _old_in, _old_out, _old_err
json.dumps(_payload)
`);
    const payload = JSON.parse(raw);
    if (!payload.ok) {
      return {
        ok: false,
        error: payload.error || "runtime",
        stdout: normalizeStdout(payload.stdout),
        expectedStdout: question.expectedStdout != null ? normalizeStdout(question.expectedStdout) : null,
        tests: [],
      };
    }
    const details = [];
    let allOk = true;
    if (question.expectedStdout != null) {
      const got = normalizeStdout(payload.stdout);
      const exp = normalizeStdout(question.expectedStdout);
      const alts = (question.altStdouts || []).map(normalizeStdout);
      const pass = got === exp || alts.includes(got);
      details.push({ kind: "stdout", ok: pass, got, expected: exp });
      if (!pass) allOk = false;
    }
    tests.forEach((t, i) => {
      const r = payload.results[i] || { ok: false, value: null, error: "missing" };
      if (!r.ok) {
        details.push({ kind: "test", ok: false, expr: t.expr || t.call, error: r.error, expected: t.expected });
        allOk = false;
        return;
      }
      const pass = valuesEqual(r.value, t.expected);
      details.push({ kind: "test", ok: pass, expr: t.expr || t.call, got: r.value, expected: t.expected });
      if (!pass) allOk = false;
    });
    if (question.expectedStdout == null && !tests.length) {
      allOk = false;
    }
    return {
      ok: allOk,
      error: null,
      stdout: normalizeStdout(payload.stdout),
      expectedStdout: question.expectedStdout != null ? normalizeStdout(question.expectedStdout) : null,
      tests: details,
    };
  }

  const api = {
    PYODIDE_CDN,
    getStatus,
    loadPyodideEngine,
    gradePython,
    normalizeStdout,
    valuesEqual,
    neededPackages,
    ensurePackages,
  };
  root.PythonEngine = api;
})(typeof window !== "undefined" ? window : globalThis);
