/* Accent colors per topic — calm but distinct. */
(function (root) {
  const SQL_META = {
    crud:            { accent: "#2c5c50", soft: "#d7e6df" },
    conditions:      { accent: "#c45c4a", soft: "#f6e0db" },
    orderby:         { accent: "#2a7a73", soft: "#d4eeeb" },
    ascdesc:         { accent: "#1f8a8a", soft: "#d3efef" },
    nulls:           { accent: "#5a6a75", soft: "#e1e6ea" },
    math:            { accent: "#c4892c", soft: "#f6e9cf" },
    limit:           { accent: "#3a6ea8", soft: "#d9e5f4" },
    offset:          { accent: "#4a5aa0", soft: "#dddff3" },
    top:             { accent: "#2c3e6b", soft: "#d8deea" },
    like:            { accent: "#6b4ea8", soft: "#e6def4" },
    wildcards:       { accent: "#8a4e8a", soft: "#f0dff0" },
    inbetween:       { accent: "#c47a4a", soft: "#f6e6d8" },
    alias:           { accent: "#3d8a6a", soft: "#d7eee4" },
    distinct:        { accent: "#2a8aaa", soft: "#d4eef4" },
    "types-numeric": { accent: "#a85a38", soft: "#f3e0d6" },
    "types-string":  { accent: "#b85a70", soft: "#f4dde3" },
    groupby:         { accent: "#3a6b3e", soft: "#d9ead9" },
    join:            { accent: "#355f9a", soft: "#d7e2f2" },
    mixed:           { accent: "#c8962e", soft: "#f4e6c4" }
  };

  const PYTHON_META = {
    printvar:     { accent: "#2c5c50", soft: "#d7e6df" },
    types:        { accent: "#a85a38", soft: "#f3e0d6" },
    strings:      { accent: "#b85a70", soft: "#f4dde3" },
    operators:    { accent: "#c4892c", soft: "#f6e9cf" },
    conditionals: { accent: "#c45c4a", soft: "#f6e0db" },
    loops:        { accent: "#3a6ea8", soft: "#d9e5f4" },
    lists:        { accent: "#2a7a73", soft: "#d4eeeb" },
    tuples:       { accent: "#4a5aa0", soft: "#dddff3" },
    dicts:        { accent: "#6b4ea8", soft: "#e6def4" },
    sets:         { accent: "#1f8a8a", soft: "#d3efef" },
    functions:    { accent: "#355f9a", soft: "#d7e2f2" },
    builtins:     { accent: "#3a6b3e", soft: "#d9ead9" },
    mixed:        { accent: "#c8962e", soft: "#f4e6c4" }
  };

  const DATA_META = {
    datascience:     { accent: "#1A2340", soft: "#e6e8ee" },
    libraries:       { accent: "#1A2340", soft: "#e6e8ee" },
    jupyter:         { accent: "#1A2340", soft: "#e6e8ee" },
    "numpy-intro":   { accent: "#1A2340", soft: "#e6e8ee" },
    "numpy-random":  { accent: "#1A2340", soft: "#e6e8ee" },
    "numpy-index":   { accent: "#1A2340", soft: "#e6e8ee" },
    "numpy-ops":     { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-series":     { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-dataframe":  { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-select":     { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-transform":  { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-missing":    { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-groupby":    { accent: "#1A2340", soft: "#e6e8ee" },
    "pandas-pivot":      { accent: "#1A2340", soft: "#e6e8ee" },
    "matplotlib-subplots": { accent: "#1A2340", soft: "#e6e8ee" }
  };

  const VOCAB_META = {
    "sql-keywords":    { accent: "#1A2340", soft: "#e6e8ee" },
    "sql-concepts":    { accent: "#1A2340", soft: "#e6e8ee" },
    "python-basics":   { accent: "#1A2340", soft: "#e6e8ee" },
    "python-methods":  { accent: "#1A2340", soft: "#e6e8ee" },
    env:               { accent: "#1A2340", soft: "#e6e8ee" },
    numpy:             { accent: "#1A2340", soft: "#e6e8ee" },
    pandas:            { accent: "#1A2340", soft: "#e6e8ee" },
    matplotlib:        { accent: "#1A2340", soft: "#e6e8ee" },
    general:           { accent: "#1A2340", soft: "#e6e8ee" }
  };

  const TRACK_CHAPTERS = {
    sql: [
      { id: "basics", title: "יסודות", topics: ["crud"] },
      { id: "filter", title: "סינון ותנאים", topics: ["conditions", "like", "wildcards", "inbetween", "nulls"] },
      { id: "sort", title: "מיון והגבלה", topics: ["orderby", "ascdesc", "limit", "offset", "top"] },
      { id: "calc", title: "פונקציות וחישובים", topics: ["math", "alias", "distinct"] },
      { id: "types", title: "סוגי נתונים", topics: ["types-numeric", "types-string"] },
      { id: "group", title: "קיבוץ וחיבור טבלאות", topics: ["groupby", "join"] },
      { id: "mixed", title: "תרגול משולב", topics: ["mixed"] }
    ],
    python: [
      { id: "basics", title: "יסודות", topics: ["printvar", "types", "strings", "operators"] },
      { id: "flow", title: "תנאים ולולאות", topics: ["conditionals", "loops"] },
      { id: "struct", title: "מבני נתונים", topics: ["lists", "tuples", "dicts", "sets"] },
      { id: "funcs", title: "פונקציות", topics: ["functions", "builtins"] },
      { id: "mixed", title: "תרגול משולב", topics: ["mixed"] }
    ],
    data: [
      { id: "basics", title: "יסודות", topics: ["datascience"] },
      { id: "env", title: "סביבת עבודה", topics: ["libraries", "jupyter"] },
      { id: "numpy", title: "NumPy", topics: ["numpy-intro", "numpy-random", "numpy-index", "numpy-ops"] },
      { id: "pandas", title: "Pandas", topics: ["pandas-series", "pandas-dataframe", "pandas-select", "pandas-transform", "pandas-missing", "pandas-groupby", "pandas-pivot"] },
      { id: "matplotlib", title: "Matplotlib", topics: ["matplotlib-subplots"] }
    ],
    vocab: [
      { id: "sql-keywords", title: "מילות מפתח וסעיפים ב-SQL", topics: ["sql-keywords"] },
      { id: "sql-concepts", title: "מושגי SQL", topics: ["sql-concepts"] },
      { id: "python-basics", title: "יסודות פייתון", topics: ["python-basics"] },
      { id: "python-methods", title: "שיטות ופונקציות בפייתון", topics: ["python-methods"] },
      { id: "env", title: "סביבת עבודה", topics: ["env"] },
      { id: "numpy", title: "NumPy", topics: ["numpy"] },
      { id: "pandas", title: "Pandas", topics: ["pandas"] },
      { id: "matplotlib", title: "Matplotlib", topics: ["matplotlib"] },
      { id: "general", title: "מושגים כלליים", topics: ["general"] }
    ]
  };

  function topicMeta(track, id) {
    const table = track === "python" ? PYTHON_META : track === "data" ? DATA_META : track === "vocab" ? VOCAB_META : SQL_META;
    return table[id] || { accent: "#1A2340", soft: "#e6e8ee" };
  }

  function chaptersFor(track) {
    return TRACK_CHAPTERS[track] || [];
  }

  root.TOPIC_META = { SQL_META, PYTHON_META, DATA_META, VOCAB_META, TRACK_CHAPTERS, topicMeta, chaptersFor };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = root.TOPIC_META;
  }
})(typeof window !== "undefined" ? window : globalThis);
