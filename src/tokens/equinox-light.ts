/**
 * Equinox Light — warm parchment, high-chroma accents.
 *
 * Do not hand-edit themes/*.json. Run `npm run build`.
 *
 * Daylight twin of Equinox Dark: vivid mid-tones on soft paper,
 * coral numbers, warm git decorations, readable chrome.
 */

import type { ThemeTokens } from "./types.ts";

export const tokens: ThemeTokens = {
  meta: {
    name: "Equinox Light",
    type: "light",
    fileName: "equinox-light-color-theme.json",
  },

  bg: {
    base: "#F5F1E8",
    raised1: "#EFE9DD",
    raised2: "#E8E1D2",
    raised3: "#E0D8C6",
    widget: "#E4DCCB",
    input: "#FAF7F0",
    inputBorder: "#C4B8A0",
    hover: "#E2DAC8",
    overlay: "#C4B8A0",
    selection: "#4678FF29",
    selectionInactive: "#4678FF18",
    findMatch: "#D8B54A33",
    findMatchCurrent: "#D8B54A55",
  },

  fg: {
    bright: "#1A1A1F",
    primary: "#3F4658",
    secondary: "#4A453E",
    muted: "#8A847A",
    comment: "#8D8D8D",
    disabled: "#A8A29A",
    onAccent: "#FAF7F0",
  },

  accent: {
    keyword: "#D11A3A",
    storage: "#EA580C",
    decorator: "#C026A0",
    tag: "#D11A3A",
    function: "#0F766E",
    type: "#1D4ED8",
    iface: "#1D4ED8",
    enum: "#C026A0",
    property: "#15803D",
    string: "#4D7C0F",
    constant: "#E85D4C",
    regex: "#C026A0",
    escape: "#0E7490",
    operator: "#6B6560",
    punctuation: "#9A948A",
    invalid: "#D7263D",
  },

  status: {
    error: "#D7263D",
    warning: "#E8A317",
    info: "#0F766E",
    success: "#3AA76D",
  },

  git: {
    added: "#48B36B",
    modified: "#D97706",
    deleted: "#E15353",
    untracked: "#3AA76D",
    conflict: "#E8A317",
  },

  bracket: ["#D11A3A", "#0F766E", "#E85D4C", "#1D4ED8", "#15803D", "#C026A0"],

  terminal: {
    background: "#F1ECE3",
    foreground: "#3F4658",
    ansiBlack: "#E8E1D2",
    ansiRed: "#D7263D",
    ansiGreen: "#3AA76D",
    ansiYellow: "#D97706",
    ansiBlue: "#0F766E",
    ansiMagenta: "#D11A3A",
    ansiCyan: "#0E7490",
    ansiWhite: "#4A453E",
    ansiBrightBlack: "#8A847A",
    ansiBrightRed: "#E15353",
    ansiBrightGreen: "#48B36B",
    ansiBrightYellow: "#E8A317",
    ansiBrightBlue: "#1D4ED8",
    ansiBrightMagenta: "#C026A0",
    ansiBrightCyan: "#0E7490",
    ansiBrightWhite: "#1A1A1F",
    cursorForeground: "#0E7490",
  },
};
