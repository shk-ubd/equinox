/**
 * Equinox design-language contract.
 *
 * Dark and Light variants must implement this shape so token hierarchy,
 * temperature roles, and semantic meaning stay identical across modes.
 * Light is a first-class daylight counterpart — soft warm paper surfaces,
 * never a pure-white invert of Dark.
 */

export type HexColor = `#${string}`;

export interface SurfaceTokens {
  /** Deepest layer — editor canvas */
  base: HexColor;
  /** Sidebar, panel, activity bar */
  raised1: HexColor;
  /** Active tab, status bar, line highlight */
  raised2: HexColor;
  /** Menus / floating chrome */
  raised3: HexColor;
  /** Command palette / editor widgets */
  widget: HexColor;
  /** Typing surfaces — must clearly read as fields */
  input: HexColor;
  /** Input field border */
  inputBorder: HexColor;
  /** Hover lift — must feel alive vs raised2 */
  hover: HexColor;
  /** Hairline borders / dividers */
  overlay: HexColor;
  selection: HexColor;
  selectionInactive: HexColor;
  findMatch: HexColor;
  findMatchCurrent: HexColor;
}

export interface ForegroundTokens {
  /** Active UI chrome (titles, active tabs) */
  bright: HexColor;
  /** Default editor text / variables — high contrast body */
  primary: HexColor;
  /** Secondary UI labels (sidebar, status) */
  secondary: HexColor;
  /** Line numbers, placeholders */
  muted: HexColor;
  /** Comments — italic, clearly below body but still readable */
  comment: HexColor;
  /** Disabled / unused dimming */
  disabled: HexColor;
  /** Ink on solid accent fills (buttons, badges, debug status) — dark on both variants */
  onAccent: HexColor;
}

/**
 * Temperature + semantic roles.
 * Warm = actions | Cool = structure | Natural = data | Muted = docs | Graphite = noise
 *
 * Contrast model (pro themes win here):
 * - Body text stays bright — hierarchy comes from chroma + hue, not dimming variables
 * - Accents are high-chroma so they read luminous on deep glass
 * Hue families (Equinox instruments):
 * meter amber → actions | x-ray / iceberg blue → structure |
 * silvery purple → types | martini olive-bronze → strings | mint → git only
 *
 * Relative pop (chroma first, then slight luminance):
 * type / function / keyword (hero) > string / constant / property > variable > operator > punct > comment
 */
export interface AccentTokens {
  /** Control-flow keywords (if/else/await) — Light: violet authority */
  keyword: HexColor;
  /** Storage / language keywords (const/let/class) — Light: amber */
  storage: HexColor;
  decorator: HexColor;
  tag: HexColor;
  function: HexColor;
  type: HexColor;
  /** Interfaces — may equal type on Dark */
  iface: HexColor;
  /** Enums — may equal type on Dark */
  enum: HexColor;
  property: HexColor;
  string: HexColor;
  /** Numbers / coral literals */
  constant: HexColor;
  regex: HexColor;
  escape: HexColor;
  operator: HexColor;
  punctuation: HexColor;
  invalid: HexColor;
}

export interface StatusTokens {
  error: HexColor;
  warning: HexColor;
  info: HexColor;
  success: HexColor;
}

export interface GitTokens {
  added: HexColor;
  modified: HexColor;
  deleted: HexColor;
  untracked: HexColor;
  conflict: HexColor;
}

export interface TerminalTokens {
  background: HexColor;
  foreground: HexColor;
  ansiBlack: HexColor;
  ansiRed: HexColor;
  ansiGreen: HexColor;
  ansiYellow: HexColor;
  ansiBlue: HexColor;
  ansiMagenta: HexColor;
  ansiCyan: HexColor;
  ansiWhite: HexColor;
  ansiBrightBlack: HexColor;
  ansiBrightRed: HexColor;
  ansiBrightGreen: HexColor;
  ansiBrightYellow: HexColor;
  ansiBrightBlue: HexColor;
  ansiBrightMagenta: HexColor;
  ansiBrightCyan: HexColor;
  ansiBrightWhite: HexColor;
  cursorForeground: HexColor;
}

export interface ThemeTokens {
  meta: {
    name: string;
    type: "dark" | "light";
    /** Filename under themes/ without path */
    fileName: string;
  };
  bg: SurfaceTokens;
  fg: ForegroundTokens;
  accent: AccentTokens;
  status: StatusTokens;
  git: GitTokens;
  /** Six-stop bracket pair cycle — distinct hues, distinct luminances */
  bracket: readonly [HexColor, HexColor, HexColor, HexColor, HexColor, HexColor];
  terminal: TerminalTokens;
}
