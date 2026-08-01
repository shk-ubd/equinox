/**
 * Emberglass Light — design-language tokens (single source of truth).
 *
 * Do not hand-edit themes/*.json. Run `npm run build`.
 *
 * Contrast lesson: pushing every accent darker made them muddy and similar.
 * This pass uses high-chroma mid-tones with wide hue gaps so roles separate
 * at a glance on warm paper `#F2EFE7`, while body ink stays softer so color wins.
 */

import type { ThemeTokens } from "./types.ts";

export const tokens: ThemeTokens = {
  meta: {
    name: "Emberglass Light",
    type: "light",
    fileName: "emberglass-light-color-theme.json",
  },

  bg: {
    base: "#F2EFE7",
    raised1: "#EBE7DE",
    raised2: "#E6E1D6",
    raised3: "#E0DBCF",
    widget: "#E0DBCF",
    input: "#E8E4D9",
    inputBorder: "#B8AC90",
    hover: "#E3DED2",
    overlay: "#B8AC90",
    selection: "#6B9BD666",
    selectionInactive: "#6B9BD633",
    findMatch: "#D9770640",
    findMatchCurrent: "#D9770670",
  },

  // Soft ink — accents must outrank variables
  fg: {
    bright: "#111827",
    primary: "#3F4658",
    secondary: "#4B5568",
    muted: "#7B8499",
    comment: "#8B93A8",
    disabled: "#A1A8B8",
    onAccent: "#111827",
  },

  // High-chroma, wide hue gaps (warm vs cool clearly split)
  accent: {
    keyword: "#D11A3A", // vivid crimson
    storage: "#EA580C", // vivid orange — not red
    decorator: "#C026A0", // hot magenta
    tag: "#D11A3A",
    function: "#0F766E", // clear teal
    type: "#1D4ED8", // electric blue — cool hero
    property: "#15803D", // true green — not teal
    string: "#4D7C0F", // lime olive — not green-property
    constant: "#A16207", // gold amber — not orange-storage
    regex: "#C026A0",
    escape: "#0E7490", // cyan — not function teal
    operator: "#6B7280",
    punctuation: "#9CA3AF",
    invalid: "#B91C1C",
  },

  status: {
    error: "#B91C1C",
    warning: "#A16207",
    info: "#1D4ED8",
    success: "#15803D",
  },

  git: {
    added: "#15803D",
    modified: "#1D4ED8",
    deleted: "#B91C1C",
    untracked: "#0F766E",
    conflict: "#EA580C",
  },

  // crimson → teal → amber → blue → green → magenta
  bracket: ["#D11A3A", "#0F766E", "#A16207", "#1D4ED8", "#15803D", "#C026A0"],

  terminal: {
    background: "#F2EFE7",
    foreground: "#3F4658",
    ansiBlack: "#E6E1D6",
    ansiRed: "#B91C1C",
    ansiGreen: "#4D7C0F",
    ansiYellow: "#A16207",
    ansiBlue: "#1D4ED8",
    ansiMagenta: "#D11A3A",
    ansiCyan: "#0F766E",
    ansiWhite: "#4B5568",
    ansiBrightBlack: "#7B8499",
    ansiBrightRed: "#EF4444",
    ansiBrightGreen: "#65A30D",
    ansiBrightYellow: "#D97706",
    ansiBrightBlue: "#3B82F6",
    ansiBrightMagenta: "#E879F9",
    ansiBrightCyan: "#14B8A6",
    ansiBrightWhite: "#111827",
    cursorForeground: "#D11A3A",
  },
};
