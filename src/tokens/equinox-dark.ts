/**
 * Equinox Dark — design-language tokens (single source of truth).
 *
 * Do not hand-edit themes/*.json. Run `npm run build`.
 *
 * Identity: molten gold on smoked aerospace glass.
 * Comfort-tuned for long sessions — controlled saturation, no neon blowout.
 */

import type { ThemeTokens } from "./types.ts";

export const tokens: ThemeTokens = {
  meta: {
    name: "Equinox Dark",
    type: "dark",
    fileName: "equinox-dark-color-theme.json",
  },

  bg: {
    base: "#0B1016",
    raised1: "#121925",
    raised2: "#1A232E",
    raised3: "#222C3A",
    widget: "#202A38",
    input: "#283544",
    inputBorder: "#455566",
    hover: "#1E2836",
    overlay: "#2C3848",
    selection: "#3A6B9A88",
    selectionInactive: "#3A6B9A33",
    findMatch: "#E8A85E55",
    findMatchCurrent: "#E8A85E90",
  },

  fg: {
    bright: "#E4E9F0",
    primary: "#C5CDD8",
    secondary: "#9AA6B6",
    muted: "#6B7786",
    comment: "#667280",
    disabled: "#434C5A",
    onAccent: "#0B1016",
  },

  accent: {
    keyword: "#E8A85E",
    storage: "#E87248",
    decorator: "#E86B78",
    tag: "#E8A85E",
    function: "#62B4DC",
    type: "#A8B4F0",
    iface: "#A8B4F0",
    enum: "#A8B4F0",
    property: "#62C4D4",
    string: "#C5D07A",
    constant: "#D998C8",
    regex: "#E87888",
    escape: "#72C8D8",
    operator: "#8E99A8",
    punctuation: "#747E8C",
    invalid: "#E86B78",
  },

  status: {
    error: "#E86B78",
    warning: "#E8A85E",
    info: "#62B4DC",
    success: "#52C9A4",
  },

  git: {
    added: "#52C9A4",
    modified: "#62B4DC",
    deleted: "#E86B78",
    untracked: "#A8B4F0",
    conflict: "#E87248",
  },

  bracket: ["#E8A85E", "#62B4DC", "#D998C8", "#62C4D4", "#A8B4F0", "#C5D07A"],

  terminal: {
    background: "#0B1016",
    foreground: "#C5CDD8",
    ansiBlack: "#1A232E",
    ansiRed: "#E86B78",
    ansiGreen: "#5BC470",
    ansiYellow: "#E8A85E",
    ansiBlue: "#62B4DC",
    ansiMagenta: "#D998C8",
    ansiCyan: "#62C4D4",
    ansiWhite: "#9AA6B6",
    ansiBrightBlack: "#434C5A",
    ansiBrightRed: "#F08A96",
    ansiBrightGreen: "#72D488",
    ansiBrightYellow: "#F0C080",
    ansiBrightBlue: "#A8B4F0",
    ansiBrightMagenta: "#E8B0D8",
    ansiBrightCyan: "#7CD4E0",
    ansiBrightWhite: "#E4E9F0",
    cursorForeground: "#E8A85E",
  },
};
