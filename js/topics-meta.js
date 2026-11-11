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

  function topicMeta(track, id) {
    const table = track === "python" ? PYTHON_META : SQL_META;
    return table[id] || { accent: "#2c5c50", soft: "#d7e6df" };
  }

  root.TOPIC_META = { SQL_META, PYTHON_META, topicMeta };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = root.TOPIC_META;
  }
})(typeof window !== "undefined" ? window : globalThis);
