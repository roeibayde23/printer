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

  const Quiz = { SESSION_SIZE, MIN_WRITES, TARGET_WRITES, shuffle, pickQuiz };
  root.Quiz = Quiz;
  if (typeof module !== "undefined" && module.exports) module.exports = Quiz;
})(typeof window !== "undefined" ? window : globalThis);
