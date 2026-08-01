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
    // Warm amber selection (not cool gray/blue)
    selection: "#D4A06A3D",
    selectionInactive: "#D4A06A22",
    findMatch: "#D8B54A33",
    findMatchCurrent: "#D8B54A55",
  },

  fg: {
    bright: "#1A1A1F",
    primary: "#3F4658",
    secondary: "#4A453E",
    muted: "#8A847A",
    // Slightly lighter + warmer for italic comments
    comment: "#9C968C",
    disabled: "#A8A29A",
    onAccent: "#FAF7F0",
  },

  accent: {
    // ~12% more contrast than prior crimson/orange
    keyword: "#B81432",
    storage: "#D14A0A",
    decorator: "#C026A0",
    tag: "#B81432",
    // Brighter than variables for scanability
    function: "#0B8A80",
    type: "#1D4ED8",
    iface: "#1D4ED8",
    enum: "#C026A0",
    property: "#15803D",
    // Softened saturation — less attention pull
    string: "#5C7A2E",
    constant: "#E85D4C",
    regex: "#C026A0",
    escape: "#0E7490",
    operator: "#6B6560",
    punctuation: "#9A948A",
    // Coral-shifted errors (not pure red)
    invalid: "#DC5A4A",
  },

  status: {
    error: "#DC5A4A",
    warning: "#E8A317",
    info: "#0F766E",
    success: "#3AA76D",
  },

  git: {
    added: "#48B36B",
    modified: "#D97706",
    deleted: "#DC5A4A",
    untracked: "#3AA76D",
    conflict: "#E8A317",
  },

  // Slightly more distinct, still muted on parchment
  bracket: ["#B81432", "#0B8A80", "#E07060", "#1A56C4", "#1A8A45", "#B01E90"],

  terminal: {
    background: "#F1ECE3",
    foreground: "#3F4658",
    ansiBlack: "#E8E1D2",
    ansiRed: "#DC5A4A",
    ansiGreen: "#3AA76D",
    // Amber prompt / status accent
    ansiYellow: "#D97706",
    ansiBlue: "#0F766E",
    ansiMagenta: "#B81432",
    ansiCyan: "#0E7490",
    ansiWhite: "#4A453E",
    ansiBrightBlack: "#8A847A",
    ansiBrightRed: "#E07060",
    ansiBrightGreen: "#48B36B",
    ansiBrightYellow: "#B45309",
    ansiBrightBlue: "#1D4ED8",
    ansiBrightMagenta: "#C026A0",
    ansiBrightCyan: "#0E7490",
    ansiBrightWhite: "#1A1A1F",
    cursorForeground: "#0E7490",
  },
};
