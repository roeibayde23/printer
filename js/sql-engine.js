/* sql.js helpers + result-set grading. Works in the browser and in Node. */
(function (root) {
  function normalizeValue(v) {
    if (v === null || v === undefined) return null;
    if (typeof v === "number") {
      if (Number.isNaN(v)) return null;
      return Math.round(v * 1e10) / 1e10;
    }
    if (typeof v === "bigint") return Number(v);
    if (typeof v === "boolean") return v ? 1 : 0;
    return String(v);
  }

  function resultFromExec(db, sql) {
    const rows = db.exec(sql);
    if (!rows || !rows.length) {
      return { columns: [], values: [] };
    }
    const first = rows[0];
    return {
      columns: first.columns.slice(),
      values: first.values.map((r) => r.map(normalizeValue)),
    };
  }

  function runStatements(db, sql) {
    const trimmed = String(sql || "").trim();
    if (!trimmed) throw new Error("empty");
    db.run(trimmed);
  }

  function selectAll(db, table) {
    return resultFromExec(db, "SELECT * FROM " + table + " ORDER BY id");
  }

  function sortRows(values) {
    return values
      .map((r) => r.slice())
      .sort((a, b) => {
        const sa = JSON.stringify(a);
        const sb = JSON.stringify(b);
        return sa < sb ? -1 : sa > sb ? 1 : 0;
      });
  }

  function dropColumns(result, ignore) {
    if (!ignore || !ignore.length) return result;
    const lower = ignore.map((c) => c.toLowerCase());
    const keep = result.columns
      .map((c, i) => ({ c, i }))
      .filter((x) => !lower.includes(x.c.toLowerCase()));
    return {
      columns: keep.map((x) => x.c),
      values: result.values.map((row) => keep.map((x) => row[x.i])),
    };
  }

  function resultsEqual(a, b, orderSensitive, ignoreColumns) {
    const aa = dropColumns(a, ignoreColumns);
    const bb = dropColumns(b, ignoreColumns);
    if (aa.columns.length !== bb.columns.length) return false;
    const va = (orderSensitive ? aa.values : sortRows(aa.values)).map((r) =>
      r.map(normalizeValue)
    );
    const vb = (orderSensitive ? bb.values : sortRows(bb.values)).map((r) =>
      r.map(normalizeValue)
    );
    if (va.length !== vb.length) return false;
    for (let i = 0; i < va.length; i++) {
      if (va[i].length !== vb[i].length) return false;
      for (let j = 0; j < va[i].length; j++) {
        if (va[i][j] !== vb[i][j]) return false;
      }
    }
    return true;
  }

  function createDb(SQL, schemaSql) {
    const db = new SQL.Database();
    db.exec(schemaSql);
    return db;
  }

  function gradeSql(SQL, schemaSql, question, studentSql) {
    const official = (question.expectedSql || "").trim();
    const student = String(studentSql || "").trim();
    if (!student) {
      return { ok: false, error: "empty", studentResult: null, expectedResult: null };
    }
    const orderSensitive = !!question.orderSensitive;
    const ignoreColumns = question.gradeIgnoreColumns || [];
    let expectedResult = null;
    let studentResult = null;
    try {
      const dbExp = createDb(SQL, schemaSql);
      if (question.gradeTable) {
        runStatements(dbExp, official);
        expectedResult = selectAll(dbExp, question.gradeTable);
        expectedResult = dropColumns(expectedResult, ignoreColumns);
      } else {
        expectedResult = resultFromExec(dbExp, official);
      }
      dbExp.close();
    } catch (err) {
      return {
        ok: false,
        error: "official: " + err.message,
        studentResult: null,
        expectedResult: null,
      };
    }
    try {
      const dbStu = createDb(SQL, schemaSql);
      if (question.gradeTable) {
        runStatements(dbStu, student);
        studentResult = selectAll(dbStu, question.gradeTable);
        studentResult = dropColumns(studentResult, ignoreColumns);
      } else {
        studentResult = resultFromExec(dbStu, student);
      }
      dbStu.close();
    } catch (err) {
      return {
        ok: false,
        error: err.message,
        studentResult: null,
        expectedResult,
      };
    }
    const ok = resultsEqual(
      studentResult,
      expectedResult,
      orderSensitive,
      null
    );
    return { ok, error: null, studentResult, expectedResult };
  }

  function runPreview(SQL, schemaSql, sql) {
    const db = createDb(SQL, schemaSql);
    try {
      const trimmed = String(sql || "").trim();
      if (!trimmed) return { ok: false, error: "empty", result: null };
      const upper = trimmed.replace(/\/\*[\s\S]*?\*\//g, "").trim().toUpperCase();
      const isQuery = /^\s*(SELECT|WITH|PRAGMA|EXPLAIN)\b/.test(upper);
      if (isQuery) {
        const result = resultFromExec(db, trimmed);
        return { ok: true, error: null, result };
      }
      runStatements(db, trimmed);
      return {
        ok: true,
        error: null,
        result: { columns: ["status"], values: [["השאילתה רצה בהצלחה"]] },
        mutated: true,
      };
    } catch (err) {
      return { ok: false, error: err.message, result: null };
    } finally {
      db.close();
    }
  }

  const api = {
    normalizeValue,
    resultFromExec,
    resultsEqual,
    createDb,
    gradeSql,
    runPreview,
    selectAll,
  };
  root.SQLEngine = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
