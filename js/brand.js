/* printer brand — 5d monogram (gold p from rotated _ + '>') + Outfit wordmark.
   Palette: navy #1A2340, gold #E8B84A. No A/B/C variants. */
(function (root) {
  const NAVY = "#1A2340";
  const GOLD = "#E8B84A";
  const WORDMARK_VB = { w: 245.2, h: 82.77 };

  function markSvg(size) {
    const s = size || 64;
    return `<svg class="brand-logo" viewBox="0 0 180 180" width="${s}" height="${s}" aria-hidden="true" focusable="false">
      <rect width="180" height="180" rx="40.266" fill="${NAVY}"/>
      <path d="M74 43 L74 133" fill="none" stroke="${GOLD}" stroke-width="12" stroke-linecap="round"/>
      <path d="M75.04 44.04 L108.45 70.14 L75.04 96.24" fill="none" stroke="${GOLD}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }

  function wordmarkInner(ink) {
    ink = ink || NAVY;
    return `<g transform="translate(23.87 39.56)">
      <path d="M -8.82 -22.05 L -8.82 22.05" fill="none" stroke="${GOLD}" stroke-width="6.20" stroke-linecap="round"/>
      <path d="M -8.31 -21.53 L 8.06 -8.75 L -8.31 4.04" fill="none" stroke="${GOLD}" stroke-width="6.20" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g transform="translate(54.31 58.45)">
      <path d="M18.256 0.56Q15.344 0.56 12.992 -0.644Q10.64 -1.848 9.24 -3.92Q7.84 -5.992 7.728 -8.68V-18.256Q7.84 -20.944 9.268 -23.044Q10.696 -25.144 13.02 -26.376Q15.344 -27.608 18.256 -27.608Q22.008 -27.608 24.976 -25.76Q27.944 -23.912 29.652 -20.72Q31.36 -17.528 31.36 -13.496Q31.36 -9.52 29.652 -6.328Q27.944 -3.136 24.976 -1.288Q22.008 0.56 18.256 0.56ZM3.248 11.312V-27.048H10.584V-19.936L9.352 -13.384L10.528 -6.832V11.312ZM16.968 -6.216Q18.984 -6.216 20.552 -7.14Q22.12 -8.064 22.988 -9.716Q23.856 -11.368 23.856 -13.552Q23.856 -15.68 22.988 -17.332Q22.12 -18.984 20.552 -19.908Q18.984 -20.832 16.968 -20.832Q15.008 -20.832 13.44 -19.908Q11.872 -18.984 11.004 -17.332Q10.136 -15.68 10.136 -13.552Q10.136 -11.368 11.004 -9.716Q11.872 -8.064 13.412 -7.14Q14.952 -6.216 16.968 -6.216Z" fill="${ink}"/>
      <path d="M36.736 0V-27.048H44.072V0ZM44.072 -14.952 41.216 -16.856Q41.72 -21.84 44.128 -24.724Q46.536 -27.608 51.072 -27.608Q53.032 -27.608 54.6 -26.964Q56.168 -26.32 57.456 -24.864L52.864 -19.6Q52.248 -20.272 51.38 -20.608Q50.512 -20.944 49.392 -20.944Q47.04 -20.944 45.556 -19.46Q44.072 -17.976 44.072 -14.952Z" fill="${ink}"/>
      <path d="M61.6 0V-27.048H68.992V0ZM65.296 -31.416Q63.504 -31.416 62.328 -32.62Q61.152 -33.824 61.152 -35.616Q61.152 -37.352 62.328 -38.584Q63.504 -39.816 65.296 -39.816Q67.144 -39.816 68.292 -38.584Q69.44 -37.352 69.44 -35.616Q69.44 -33.824 68.292 -32.62Q67.144 -31.416 65.296 -31.416Z" fill="${ink}"/>
      <path d="M94.248 0V-15.512Q94.248 -17.92 92.736 -19.432Q91.224 -20.944 88.816 -20.944Q87.248 -20.944 86.016 -20.272Q84.784 -19.6 84.084 -18.368Q83.384 -17.136 83.384 -15.512L80.528 -16.968Q80.528 -20.16 81.9 -22.54Q83.272 -24.92 85.708 -26.264Q88.144 -27.608 91.224 -27.608Q94.192 -27.608 96.544 -26.124Q98.896 -24.64 100.24 -22.26Q101.584 -19.88 101.584 -17.136V0ZM76.048 0V-27.048H83.384V0Z" fill="${ink}"/>
      <path d="M112.056 0V-38.304H119.392V0ZM105.728 -20.608V-27.048H125.72V-20.608Z" fill="${ink}"/>
      <path d="M143.36 0.56Q139.104 0.56 135.8 -1.26Q132.496 -3.08 130.564 -6.272Q128.632 -9.464 128.632 -13.552Q128.632 -17.584 130.508 -20.748Q132.384 -23.912 135.632 -25.788Q138.88 -27.664 142.856 -27.664Q146.776 -27.664 149.772 -25.9Q152.768 -24.136 154.476 -21.084Q156.184 -18.032 156.184 -14.168Q156.184 -13.44 156.1 -12.684Q156.016 -11.928 155.792 -10.976L133.056 -10.92V-16.408L152.376 -16.464L149.408 -14.168Q149.296 -16.576 148.54 -18.2Q147.784 -19.824 146.356 -20.692Q144.928 -21.56 142.856 -21.56Q140.672 -21.56 139.048 -20.58Q137.424 -19.6 136.556 -17.836Q135.688 -16.072 135.688 -13.664Q135.688 -11.2 136.612 -9.38Q137.536 -7.56 139.272 -6.58Q141.008 -5.6 143.304 -5.6Q145.376 -5.6 147.056 -6.3Q148.736 -7 149.968 -8.4L154.28 -4.088Q152.32 -1.792 149.492 -0.616Q146.664 0.56 143.36 0.56Z" fill="${ink}"/>
      <path d="M161.28 0V-27.048H168.616V0ZM168.616 -14.952 165.76 -16.856Q166.264 -21.84 168.672 -24.724Q171.08 -27.608 175.616 -27.608Q177.576 -27.608 179.144 -26.964Q180.712 -26.32 182 -24.864L177.408 -19.6Q176.792 -20.272 175.924 -20.608Q175.056 -20.944 173.936 -20.944Q171.584 -20.944 170.1 -19.46Q168.616 -17.976 168.616 -14.952Z" fill="${ink}"/>
    </g>`;
  }

  function wordmarkSvg(height, opts) {
    const h = height || 32;
    const onDark = !!(opts && opts.onDark);
    const ink = onDark ? "#F4F0E6" : NAVY;
    const w = (h * WORDMARK_VB.w / WORDMARK_VB.h).toFixed(2);
    return `<svg class="brand-wordmark${onDark ? " on-dark" : ""}" viewBox="0 0 ${WORDMARK_VB.w} ${WORDMARK_VB.h}" width="${w}" height="${h}" role="img" aria-label="printer" focusable="false" dir="ltr">${wordmarkInner(ink)}</svg>`;
  }

  function escape(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const Brand = {
    name: "printer",
    tagline: "תרגול SQL ופייתון",
    navy: NAVY,
    gold: GOLD,
    svg: markSvg,
    mark: function (size) { return markSvg(size || 40); },
    wordmark: wordmarkSvg,
    lockup: function (opts) {
      opts = opts || {};
      const height = opts.height || (opts.compact ? 28 : 48);
      const tag = opts.compact ? "" : `<p class="brand-tagline">${escape(Brand.tagline)}</p>`;
      return `<div class="brand-lockup ${opts.compact ? "compact" : ""}">
        ${wordmarkSvg(height)}
        ${tag}
      </div>`;
    }
  };

  root.PRINTER_BRAND = Brand;
  if (typeof module !== "undefined" && module.exports) module.exports = Brand;
})(typeof window !== "undefined" ? window : globalThis);
