/**
 * Builds a VS Code color theme JSON object from Equinox ThemeTokens.
 * Shared by Dark and Light so hierarchy stays identical.
 *
 * GENERATED theme files — do not hand-edit. Always run `npm run build`.
 */

import type { ThemeTokens } from "../src/tokens/types.ts";

function requireDefined(value: string | undefined, label: string): string {
  if (value === undefined || value === null || value === "") {
    console.error(`❌ Token reference undefined: ${label}`);
    process.exit(1);
  }
  return value;
}

function withAlpha(hex: string, alpha: string): string {
  const raw = hex.replace(/^#/, "");
  const base = raw.length === 8 ? raw.slice(0, 6) : raw;
  if (base.length !== 6) {
    console.error(`❌ Expected 6-digit hex for alpha append, got: ${hex}`);
    process.exit(1);
  }
  return `#${base}${alpha}`;
}

export function buildThemeFromTokens(tokens: ThemeTokens) {
  const { bg, fg, accent, status, git, bracket, terminal } = tokens;
  const isLight = tokens.meta.type === "light";
  const softShadow = isLight ? "#2A243828" : "#00000066";
  const deepShadow = isLight ? "#2A243840" : "#00000088";
  const stickyShadow = isLight ? "#2A243822" : "#00000055";
  // Light: active tab darker than strip; Dark: raised chrome
  const tabActiveBg = isLight ? bg.raised2 : bg.raised2;
  const tabInactiveBg = isLight ? "#F7F3EC" : bg.raised1;
  const lineHighlight = isLight ? "#00000014" : bg.raised2;
  const indentIdle = isLight ? "#D8D1C6" : bg.overlay;
  const indentActive = isLight ? "#AFA08E" : fg.muted;
  const bracketMatchBg = isLight ? withAlpha(accent.type, "45") : withAlpha(accent.keyword, "22");
  const bracketMatchBorder = isLight ? accent.type : accent.keyword;
  const scrollNormal = isLight ? withAlpha(bg.overlay, "55") : withAlpha(bg.overlay, "99");
  const scrollHover = isLight ? withAlpha(bg.overlay, "80") : withAlpha(fg.muted, "AA");
  const scrollActive = isLight ? withAlpha(fg.secondary, "99") : withAlpha(fg.secondary, "CC");
  const activityActive = isLight ? withAlpha(accent.keyword, "28") : withAlpha(accent.keyword, "12");
  const cursorFg = isLight ? accent.escape : accent.keyword;

  const colors: Record<string, string> = {
    // ── Editor plane ──────────────────────────────────────────────
    "editor.background": requireDefined(bg.base, "bg.base"),
    "editor.foreground": requireDefined(fg.primary, "fg.primary"),
    "editor.lineHighlightBackground": requireDefined(lineHighlight, "lineHighlight"),
    "editor.lineHighlightBorder": "#00000000",
    "editor.selectionBackground": requireDefined(bg.selection, "bg.selection"),
    "editor.selectionHighlightBackground": requireDefined(
      bg.selectionInactive,
      "bg.selectionInactive"
    ),
    "editor.inactiveSelectionBackground": requireDefined(
      bg.selectionInactive,
      "bg.selectionInactive"
    ),
    "editor.wordHighlightBackground": withAlpha(accent.escape, isLight ? "35" : "28"),
    "editor.wordHighlightStrongBackground": withAlpha(accent.escape, isLight ? "50" : "30"),
    "editor.wordHighlightBorder": "#00000000",
    "editor.wordHighlightStrongBorder": "#00000000",
    "editor.findMatchBackground": requireDefined(bg.findMatchCurrent, "bg.findMatchCurrent"),
    "editor.findMatchHighlightBackground": requireDefined(bg.findMatch, "bg.findMatch"),
    "editor.findRangeHighlightBackground": withAlpha(accent.keyword, "22"),
    "editor.hoverHighlightBackground": withAlpha(accent.function, "18"),
    "editor.rangeHighlightBackground": withAlpha(accent.keyword, "18"),
    "editor.symbolHighlightBackground": withAlpha(accent.type, "22"),
    "editor.foldBackground": withAlpha(accent.function, "18"),
    "editor.foldPlaceholderForeground": requireDefined(fg.muted, "fg.muted"),
    "editor.linkedEditingBackground": withAlpha(accent.function, "28"),
    "editorCursor.foreground": requireDefined(cursorFg, "cursorFg"),
    "editorCursor.background": requireDefined(bg.base, "bg.base"),
    "editorMultiCursor.primary.foreground": requireDefined(cursorFg, "cursorFg"),
    "editorMultiCursor.secondary.foreground": requireDefined(accent.function, "accent.function"),
    "editorLineNumber.foreground": requireDefined(fg.muted, "fg.muted"),
    "editorLineNumber.activeForeground": requireDefined(fg.bright, "fg.bright"),
    "editorIndentGuide.background1": requireDefined(indentIdle, "indentIdle"),
    "editorIndentGuide.activeBackground1": requireDefined(indentActive, "indentActive"),
    "editorWhitespace.foreground": withAlpha(bg.overlay, "88"),
    "editorBracketMatch.background": bracketMatchBg,
    "editorBracketMatch.border": requireDefined(bracketMatchBorder, "bracketMatchBorder"),
    "editorRuler.foreground": withAlpha(bg.overlay, "90"),
    "editorOverviewRuler.border": "#00000000",
    "editorOverviewRuler.findMatchForeground": withAlpha(accent.keyword, "AA"),
    "editorOverviewRuler.errorForeground": withAlpha(status.error, "CC"),
    "editorOverviewRuler.warningForeground": withAlpha(status.warning, "CC"),
    "editorOverviewRuler.infoForeground": withAlpha(status.info, "CC"),
    "editorOverviewRuler.addedForeground": withAlpha(git.added, "99"),
    "editorOverviewRuler.modifiedForeground": withAlpha(git.modified, "99"),
    "editorOverviewRuler.deletedForeground": withAlpha(git.deleted, "99"),
    "editorOverviewRuler.bracketMatchForeground": requireDefined(accent.keyword, "accent.keyword"),
    "editorGutter.background": requireDefined(bg.base, "bg.base"),
    "editorGutter.addedBackground": requireDefined(git.added, "git.added"),
    "editorGutter.modifiedBackground": requireDefined(git.modified, "git.modified"),
    "editorGutter.deletedBackground": requireDefined(git.deleted, "git.deleted"),
    "editorGutter.foldingControlForeground": requireDefined(fg.muted, "fg.muted"),

    "editorBracketHighlight.foreground1": requireDefined(bracket[0], "bracket[0]"),
    "editorBracketHighlight.foreground2": requireDefined(bracket[1], "bracket[1]"),
    "editorBracketHighlight.foreground3": requireDefined(bracket[2], "bracket[2]"),
    "editorBracketHighlight.foreground4": requireDefined(bracket[3], "bracket[3]"),
    "editorBracketHighlight.foreground5": requireDefined(bracket[4], "bracket[4]"),
    "editorBracketHighlight.foreground6": requireDefined(bracket[5], "bracket[5]"),
    "editorBracketHighlight.unexpectedBracket.foreground": requireDefined(
      status.error,
      "status.error"
    ),

    "editorBracketPairGuide.background1": withAlpha(bracket[0], "35"),
    "editorBracketPairGuide.background2": withAlpha(bracket[1], "35"),
    "editorBracketPairGuide.background3": withAlpha(bracket[2], "35"),
    "editorBracketPairGuide.background4": withAlpha(bracket[3], "35"),
    "editorBracketPairGuide.background5": withAlpha(bracket[4], "35"),
    "editorBracketPairGuide.background6": withAlpha(bracket[5], "35"),
    "editorBracketPairGuide.activeBackground1": withAlpha(bracket[0], "70"),
    "editorBracketPairGuide.activeBackground2": withAlpha(bracket[1], "70"),
    "editorBracketPairGuide.activeBackground3": withAlpha(bracket[2], "70"),
    "editorBracketPairGuide.activeBackground4": withAlpha(bracket[3], "70"),
    "editorBracketPairGuide.activeBackground5": withAlpha(bracket[4], "70"),
    "editorBracketPairGuide.activeBackground6": withAlpha(bracket[5], "70"),

    "editorError.foreground": requireDefined(status.error, "status.error"),
    "editorError.background": withAlpha(status.error, isLight ? "18" : "00"),
    "editorWarning.foreground": requireDefined(status.warning, "status.warning"),
    "editorWarning.background": withAlpha(status.warning, isLight ? "14" : "00"),
    "editorInfo.foreground": requireDefined(status.info, "status.info"),
    "editorHint.foreground": requireDefined(accent.type, "accent.type"),
    "editorUnnecessaryCode.opacity": "#00000088",

    "editorInlayHint.background": withAlpha(bg.raised3, "99"),
    "editorInlayHint.foreground": requireDefined(fg.muted, "fg.muted"),
    "editorInlayHint.typeForeground": requireDefined(accent.type, "accent.type"),
    "editorInlayHint.parameterForeground": requireDefined(fg.secondary, "fg.secondary"),

    "editorGhostText.foreground": requireDefined(fg.disabled, "fg.disabled"),
    "editorStickyScroll.background": requireDefined(bg.raised1, "bg.raised1"),
    "editorStickyScrollHover.background": requireDefined(bg.hover, "bg.hover"),
    "editorStickyScroll.shadow": softShadow,

    "editorLightBulb.foreground": requireDefined(status.warning, "status.warning"),
    "editorLightBulbAutoFix.foreground": requireDefined(status.info, "status.info"),

    // Must stay transparent — opaque minimap.background obscures editor content
    "minimap.background": "#00000000",
    "minimap.foregroundOpacity": isLight ? "#000000E0" : "#000000C0",
    "minimap.findMatchHighlight": withAlpha(accent.keyword, "CC"),
    "minimap.selectionHighlight": withAlpha(bg.selection, "AA"),
    "minimap.selectionOccurrenceHighlight": withAlpha(bg.selection, "88"),
    "minimap.errorHighlight": withAlpha(status.error, "CC"),
    "minimap.warningHighlight": withAlpha(status.warning, "CC"),
    "minimapGutter.addedBackground": requireDefined(git.added, "git.added"),
    "minimapGutter.modifiedBackground": requireDefined(git.modified, "git.modified"),
    "minimapGutter.deletedBackground": requireDefined(git.deleted, "git.deleted"),
    "minimapSlider.background": withAlpha(bg.overlay, isLight ? "80" : "66"),
    "minimapSlider.hoverBackground": withAlpha(fg.muted, isLight ? "90" : "66"),
    "minimapSlider.activeBackground": withAlpha(fg.secondary, "AA"),

    // ── Activity / sidebar ───────────────────────────────────────
    "activityBar.background": requireDefined(bg.raised1, "bg.raised1"),
    "activityBar.foreground": requireDefined(fg.bright, "fg.bright"),
    "activityBar.inactiveForeground": requireDefined(fg.muted, "fg.muted"),
    "activityBar.border": requireDefined(bg.overlay, "bg.overlay"),
    "activityBarBadge.background": requireDefined(accent.keyword, "accent.keyword"),
    "activityBarBadge.foreground": requireDefined(fg.onAccent, "fg.onAccent"),
    "activityBar.activeBorder": requireDefined(accent.keyword, "accent.keyword"),
    "activityBar.activeBackground": activityActive,
    "activityBarTop.foreground": requireDefined(fg.bright, "fg.bright"),
    "activityBarTop.activeBorder": requireDefined(accent.keyword, "accent.keyword"),
    "activityBarTop.inactiveForeground": requireDefined(fg.muted, "fg.muted"),

    "sideBar.background": requireDefined(bg.raised1, "bg.raised1"),
    "sideBar.foreground": requireDefined(fg.secondary, "fg.secondary"),
    "sideBar.border": requireDefined(bg.overlay, "bg.overlay"),
    "sideBarTitle.foreground": requireDefined(fg.bright, "fg.bright"),
    "sideBarSectionHeader.background": requireDefined(bg.raised1, "bg.raised1"),
    "sideBarSectionHeader.foreground": requireDefined(fg.secondary, "fg.secondary"),
    "sideBarSectionHeader.border": requireDefined(bg.overlay, "bg.overlay"),
    "sideBarStickyScroll.background": requireDefined(bg.raised1, "bg.raised1"),
    "sideBarStickyScroll.shadow": stickyShadow,

    "list.activeSelectionBackground": requireDefined(bg.selection, "bg.selection"),
    "list.activeSelectionForeground": requireDefined(fg.bright, "fg.bright"),
    "list.activeSelectionIconForeground": requireDefined(fg.bright, "fg.bright"),
    "list.hoverBackground": requireDefined(bg.hover, "bg.hover"),
    "list.hoverForeground": requireDefined(fg.bright, "fg.bright"),
    "list.inactiveSelectionBackground": requireDefined(
      bg.selectionInactive,
      "bg.selectionInactive"
    ),
    "list.inactiveSelectionForeground": requireDefined(fg.primary, "fg.primary"),
    "list.focusBackground": requireDefined(bg.selection, "bg.selection"),
    "list.focusForeground": requireDefined(fg.bright, "fg.bright"),
    "list.focusOutline": withAlpha(accent.keyword, "60"),
    "list.highlightForeground": requireDefined(accent.keyword, "accent.keyword"),
    "list.filterMatchBackground": requireDefined(bg.findMatch, "bg.findMatch"),
    "list.filterMatchBorder": requireDefined(accent.keyword, "accent.keyword"),
    "list.errorForeground": requireDefined(status.error, "status.error"),
    "list.warningForeground": requireDefined(status.warning, "status.warning"),
    "list.deemphasizedForeground": requireDefined(fg.disabled, "fg.disabled"),
    "tree.indentGuidesStroke": requireDefined(indentIdle, "indentIdle"),
    "tree.inactiveIndentGuidesStroke": withAlpha(indentIdle, isLight ? "AA" : "66"),

    // ── Status / title ────────────────────────────────────────────
    "statusBar.background": requireDefined(bg.raised2, "bg.raised2"),
    "statusBar.foreground": requireDefined(fg.secondary, "fg.secondary"),
    "statusBar.border": requireDefined(bg.overlay, "bg.overlay"),
    "statusBar.debuggingBackground": requireDefined(accent.storage, "accent.storage"),
    "statusBar.debuggingForeground": requireDefined(fg.onAccent, "fg.onAccent"),
    "statusBar.noFolderBackground": requireDefined(bg.raised2, "bg.raised2"),
    "statusBar.focusBorder": withAlpha(accent.keyword, "80"),
    "statusBarItem.hoverBackground": requireDefined(bg.hover, "bg.hover"),
    "statusBarItem.remoteBackground": requireDefined(accent.function, "accent.function"),
    "statusBarItem.remoteForeground": requireDefined(fg.onAccent, "fg.onAccent"),
    "statusBarItem.errorBackground": requireDefined(status.error, "status.error"),
    "statusBarItem.errorForeground": requireDefined(fg.onAccent, "fg.onAccent"),
    "statusBarItem.warningBackground": requireDefined(status.warning, "status.warning"),
    "statusBarItem.warningForeground": requireDefined(fg.onAccent, "fg.onAccent"),
    "statusBarItem.prominentBackground": withAlpha(accent.keyword, "33"),
    "statusBarItem.prominentForeground": requireDefined(fg.bright, "fg.bright"),
    "statusBarItem.prominentHoverBackground": withAlpha(accent.keyword, "55"),

    "titleBar.activeBackground": requireDefined(bg.raised1, "bg.raised1"),
    "titleBar.activeForeground": requireDefined(fg.bright, "fg.bright"),
    "titleBar.inactiveBackground": requireDefined(bg.base, "bg.base"),
    "titleBar.inactiveForeground": requireDefined(fg.muted, "fg.muted"),
    "titleBar.border": requireDefined(bg.overlay, "bg.overlay"),

    // ── Tabs (Light: darker active + violet top bar) ───────────────
    "tab.activeBackground": requireDefined(tabActiveBg, "tabActiveBg"),
    "tab.activeForeground": requireDefined(fg.bright, "fg.bright"),
    "tab.inactiveBackground": requireDefined(tabInactiveBg, "tabInactiveBg"),
    "tab.inactiveForeground": requireDefined(fg.muted, "fg.muted"),
    "tab.border": requireDefined(bg.overlay, "bg.overlay"),
    "tab.activeBorderTop": requireDefined(accent.keyword, "accent.keyword"),
    "tab.activeBorder": requireDefined(isLight ? tabActiveBg : bg.overlay, "tab.activeBorder"),
    "tab.hoverBackground": requireDefined(bg.hover, "bg.hover"),
    "tab.hoverForeground": requireDefined(fg.bright, "fg.bright"),
    "tab.unfocusedActiveBackground": requireDefined(tabActiveBg, "tabActiveBg"),
    "tab.unfocusedActiveForeground": requireDefined(fg.secondary, "fg.secondary"),
    "tab.unfocusedInactiveBackground": requireDefined(tabInactiveBg, "tabInactiveBg"),
    "tab.unfocusedInactiveForeground": requireDefined(fg.disabled, "fg.disabled"),
    "tab.unfocusedActiveBorderTop": withAlpha(accent.keyword, "88"),
    "tab.activeModifiedBorder": requireDefined(accent.function, "accent.function"),
    "tab.inactiveModifiedBorder": withAlpha(accent.function, "88"),
    "editorGroupHeader.tabsBackground": requireDefined(
      isLight ? tabInactiveBg : bg.raised1,
      "tabsStrip"
    ),
    "editorGroupHeader.tabsBorder": requireDefined(bg.overlay, "bg.overlay"),
    "editorGroupHeader.border": requireDefined(bg.overlay, "bg.overlay"),
    "editorGroup.border": requireDefined(bg.overlay, "bg.overlay"),
    "editorGroup.dropBackground": withAlpha(accent.function, "33"),

    // ── Panel (Problems / Output / Terminal) ───────────────────────
    "panel.background": requireDefined(
      isLight ? terminal.background : bg.raised1,
      "panel.background"
    ),
    "panel.border": requireDefined(bg.overlay, "bg.overlay"),
    "panelTitle.activeForeground": requireDefined(fg.bright, "fg.bright"),
    "panelTitle.inactiveForeground": requireDefined(fg.muted, "fg.muted"),
    "panelTitle.activeBorder": requireDefined(accent.keyword, "accent.keyword"),
    "panelSection.border": requireDefined(bg.overlay, "bg.overlay"),
    "panelSectionHeader.background": requireDefined(bg.raised2, "bg.raised2"),
    "panelSectionHeader.foreground": requireDefined(fg.secondary, "fg.secondary"),
    "panelInput.border": requireDefined(bg.inputBorder, "bg.inputBorder"),

    // ── Inputs / forms (agent + chat typing surfaces) ─────────────
    "input.background": requireDefined(bg.input, "bg.input"),
    "input.border": requireDefined(bg.inputBorder, "bg.inputBorder"),
    "input.foreground": requireDefined(fg.bright, "fg.bright"),
    "input.placeholderForeground": requireDefined(fg.muted, "fg.muted"),
    "inputOption.activeBorder": requireDefined(accent.keyword, "accent.keyword"),
    "inputOption.activeBackground": withAlpha(accent.keyword, "33"),
    "inputOption.activeForeground": requireDefined(fg.bright, "fg.bright"),
    "inputOption.hoverBackground": requireDefined(bg.hover, "bg.hover"),
    "inputValidation.errorBackground": withAlpha(status.error, "33"),
    "inputValidation.errorBorder": requireDefined(status.error, "status.error"),
    "inputValidation.errorForeground": requireDefined(fg.bright, "fg.bright"),
    "inputValidation.warningBackground": withAlpha(status.warning, "33"),
    "inputValidation.warningBorder": requireDefined(status.warning, "status.warning"),
    "inputValidation.infoBackground": withAlpha(status.info, "33"),
    "inputValidation.infoBorder": requireDefined(status.info, "status.info"),

    "dropdown.background": requireDefined(bg.widget, "bg.widget"),
    "dropdown.border": requireDefined(bg.inputBorder, "bg.inputBorder"),
    "dropdown.foreground": requireDefined(fg.primary, "fg.primary"),
    "dropdown.listBackground": requireDefined(bg.widget, "bg.widget"),

    "checkbox.background": requireDefined(bg.input, "bg.input"),
    "checkbox.foreground": requireDefined(accent.keyword, "accent.keyword"),
    "checkbox.border": requireDefined(bg.inputBorder, "bg.inputBorder"),
    "checkbox.selectBackground": requireDefined(bg.input, "bg.input"),
    "checkbox.selectBorder": requireDefined(accent.keyword, "accent.keyword"),

    "button.background": requireDefined(accent.keyword, "accent.keyword"),
    "button.foreground": requireDefined(fg.onAccent, "fg.onAccent"),
    "button.hoverBackground": requireDefined(accent.storage, "accent.storage"),
    "button.secondaryBackground": requireDefined(bg.raised3, "bg.raised3"),
    "button.secondaryForeground": requireDefined(fg.bright, "fg.bright"),
    "button.secondaryHoverBackground": requireDefined(bg.hover, "bg.hover"),
    "extensionButton.prominentBackground": requireDefined(accent.keyword, "accent.keyword"),
    "extensionButton.prominentForeground": requireDefined(fg.onAccent, "fg.onAccent"),
    "extensionButton.prominentHoverBackground": requireDefined(accent.storage, "accent.storage"),
    "extensionButton.background": requireDefined(accent.function, "accent.function"),
    "extensionButton.foreground": requireDefined(fg.onAccent, "fg.onAccent"),
    "extensionButton.hoverBackground": requireDefined(accent.type, "accent.type"),

    // Warm coral badge — prominent counts that fit parchment (not cool blue)
    "badge.background": requireDefined(accent.constant, "accent.constant"),
    "badge.foreground": requireDefined(fg.onAccent, "fg.onAccent"),
    "progressBar.background": requireDefined(accent.keyword, "accent.keyword"),

    "scrollbar.shadow": softShadow,
    "scrollbarSlider.background": scrollNormal,
    "scrollbarSlider.hoverBackground": scrollHover,
    "scrollbarSlider.activeBackground": scrollActive,

    "sash.hoverBorder": requireDefined(accent.keyword, "accent.keyword"),

    // ── Widgets / command palette ─────────────────────────────────
    "widget.shadow": deepShadow,
    "widget.border": requireDefined(bg.overlay, "bg.overlay"),
    "editorWidget.background": requireDefined(bg.widget, "bg.widget"),
    "editorWidget.foreground": requireDefined(fg.primary, "fg.primary"),
    "editorWidget.border": requireDefined(bg.overlay, "bg.overlay"),
    "editorWidget.resizeBorder": requireDefined(accent.keyword, "accent.keyword"),
    "editorHoverWidget.background": requireDefined(bg.widget, "bg.widget"),
    "editorHoverWidget.border": requireDefined(bg.overlay, "bg.overlay"),
    "editorHoverWidget.foreground": requireDefined(fg.primary, "fg.primary"),
    "editorHoverWidget.statusBarBackground": requireDefined(bg.raised2, "bg.raised2"),
    "editorSuggestWidget.background": requireDefined(bg.widget, "bg.widget"),
    "editorSuggestWidget.border": requireDefined(bg.overlay, "bg.overlay"),
    "editorSuggestWidget.foreground": requireDefined(fg.primary, "fg.primary"),
    "editorSuggestWidget.selectedBackground": requireDefined(bg.selection, "bg.selection"),
    "editorSuggestWidget.selectedForeground": requireDefined(fg.bright, "fg.bright"),
    "editorSuggestWidget.highlightForeground": requireDefined(accent.keyword, "accent.keyword"),
    "editorSuggestWidget.focusHighlightForeground": requireDefined(
      accent.keyword,
      "accent.keyword"
    ),
    "editorSuggestWidgetStatus.foreground": requireDefined(fg.secondary, "fg.secondary"),

    "quickInput.background": requireDefined(bg.widget, "bg.widget"),
    "quickInput.foreground": requireDefined(fg.primary, "fg.primary"),
    "quickInputList.focusBackground": requireDefined(bg.selection, "bg.selection"),
    "quickInputList.focusForeground": requireDefined(fg.bright, "fg.bright"),
    "quickInputList.focusIconForeground": requireDefined(fg.bright, "fg.bright"),
    "quickInputTitle.background": requireDefined(bg.raised2, "bg.raised2"),

    "menu.background": requireDefined(bg.widget, "bg.widget"),
    "menu.foreground": requireDefined(fg.primary, "fg.primary"),
    "menu.selectionBackground": requireDefined(bg.selection, "bg.selection"),
    "menu.selectionForeground": requireDefined(fg.bright, "fg.bright"),
    "menu.separatorBackground": requireDefined(bg.overlay, "bg.overlay"),
    "menu.border": requireDefined(bg.overlay, "bg.overlay"),

    "notifications.background": requireDefined(bg.widget, "bg.widget"),
    "notifications.foreground": requireDefined(fg.primary, "fg.primary"),
    "notifications.border": requireDefined(bg.overlay, "bg.overlay"),
    "notificationCenterHeader.background": requireDefined(bg.raised2, "bg.raised2"),
    "notificationCenterHeader.foreground": requireDefined(fg.bright, "fg.bright"),
    "notificationsInfoIcon.foreground": requireDefined(status.info, "status.info"),
    "notificationsWarningIcon.foreground": requireDefined(status.warning, "status.warning"),
    "notificationsErrorIcon.foreground": requireDefined(status.error, "status.error"),

    "editorGhostText.border": "#00000000",

    // ── Breadcrumb / peek / merge / diff ──────────────────────────
    "breadcrumb.foreground": requireDefined(fg.secondary, "fg.secondary"),
    "breadcrumb.focusForeground": requireDefined(fg.bright, "fg.bright"),
    "breadcrumb.activeSelectionForeground": requireDefined(accent.keyword, "accent.keyword"),
    "breadcrumbPicker.background": requireDefined(bg.widget, "bg.widget"),

    "peekView.border": requireDefined(accent.keyword, "accent.keyword"),
    "peekViewEditor.background": requireDefined(bg.base, "bg.base"),
    "peekViewEditorGutter.background": requireDefined(bg.base, "bg.base"),
    "peekViewEditor.matchHighlightBackground": requireDefined(bg.findMatch, "bg.findMatch"),
    "peekViewResult.background": requireDefined(bg.raised1, "bg.raised1"),
    "peekViewResult.matchHighlightBackground": requireDefined(bg.findMatch, "bg.findMatch"),
    "peekViewResult.selectionBackground": requireDefined(bg.selection, "bg.selection"),
    "peekViewResult.selectionForeground": requireDefined(fg.bright, "fg.bright"),
    "peekViewResult.fileForeground": requireDefined(fg.primary, "fg.primary"),
    "peekViewResult.lineForeground": requireDefined(fg.secondary, "fg.secondary"),
    "peekViewTitle.background": requireDefined(bg.raised2, "bg.raised2"),
    "peekViewTitleLabel.foreground": requireDefined(fg.bright, "fg.bright"),
    "peekViewTitleDescription.foreground": requireDefined(fg.secondary, "fg.secondary"),

    "diffEditor.insertedTextBackground": withAlpha(git.added, "28"),
    "diffEditor.removedTextBackground": withAlpha(git.deleted, "28"),
    "diffEditor.insertedLineBackground": withAlpha(git.added, "18"),
    "diffEditor.removedLineBackground": withAlpha(git.deleted, "18"),
    "diffEditor.diagonalFill": withAlpha(bg.overlay, "88"),
    "diffEditor.border": requireDefined(bg.overlay, "bg.overlay"),
    "diffEditorGutter.insertedLineBackground": withAlpha(git.added, "33"),
    "diffEditorGutter.removedLineBackground": withAlpha(git.deleted, "33"),
    "diffEditorOverview.insertedForeground": withAlpha(git.added, "AA"),
    "diffEditorOverview.removedForeground": withAlpha(git.deleted, "AA"),

    "merge.currentHeaderBackground": withAlpha(git.added, "44"),
    "merge.currentContentBackground": withAlpha(git.added, "22"),
    "merge.incomingHeaderBackground": withAlpha(git.modified, "44"),
    "merge.incomingContentBackground": withAlpha(git.modified, "22"),
    "merge.commonHeaderBackground": withAlpha(fg.muted, "44"),
    "merge.commonContentBackground": withAlpha(fg.muted, "22"),
    "merge.border": requireDefined(bg.overlay, "bg.overlay"),

    "gitDecoration.addedResourceForeground": requireDefined(git.added, "git.added"),
    "gitDecoration.modifiedResourceForeground": requireDefined(git.modified, "git.modified"),
    "gitDecoration.deletedResourceForeground": requireDefined(git.deleted, "git.deleted"),
    "gitDecoration.renamedResourceForeground": requireDefined(git.modified, "git.modified"),
    "gitDecoration.untrackedResourceForeground": requireDefined(git.untracked, "git.untracked"),
    "gitDecoration.conflictingResourceForeground": requireDefined(git.conflict, "git.conflict"),
    "gitDecoration.ignoredResourceForeground": requireDefined(fg.disabled, "fg.disabled"),
    "gitDecoration.stageModifiedResourceForeground": requireDefined(git.modified, "git.modified"),
    "gitDecoration.stageDeletedResourceForeground": requireDefined(git.deleted, "git.deleted"),
    "gitDecoration.submoduleResourceForeground": requireDefined(fg.secondary, "fg.secondary"),

    // ── Debug / testing ───────────────────────────────────────────
    "debugToolBar.background": requireDefined(bg.widget, "bg.widget"),
    "debugToolBar.border": requireDefined(bg.overlay, "bg.overlay"),
    "debugExceptionWidget.background": requireDefined(bg.widget, "bg.widget"),
    "debugExceptionWidget.border": requireDefined(status.error, "status.error"),
    "debugIcon.breakpointForeground": requireDefined(status.error, "status.error"),
    "debugIcon.breakpointDisabledForeground": requireDefined(fg.disabled, "fg.disabled"),
    "debugIcon.startForeground": requireDefined(status.success, "status.success"),
    "debugIcon.pauseForeground": requireDefined(status.warning, "status.warning"),
    "debugIcon.stopForeground": requireDefined(status.error, "status.error"),
    "debugIcon.restartForeground": requireDefined(accent.function, "accent.function"),
    "debugIcon.continueForeground": requireDefined(status.success, "status.success"),
    "debugIcon.stepOverForeground": requireDefined(accent.function, "accent.function"),
    "debugIcon.stepIntoForeground": requireDefined(accent.function, "accent.function"),
    "debugIcon.stepOutForeground": requireDefined(accent.function, "accent.function"),
    "debugConsole.infoForeground": requireDefined(status.info, "status.info"),
    "debugConsole.warningForeground": requireDefined(status.warning, "status.warning"),
    "debugConsole.errorForeground": requireDefined(status.error, "status.error"),
    "debugConsole.sourceForeground": requireDefined(fg.secondary, "fg.secondary"),
    "debugTokenExpression.name": requireDefined(accent.property, "accent.property"),
    "debugTokenExpression.value": requireDefined(fg.primary, "fg.primary"),
    "debugTokenExpression.string": requireDefined(accent.string, "accent.string"),
    "debugTokenExpression.boolean": requireDefined(accent.constant, "accent.constant"),
    "debugTokenExpression.number": requireDefined(accent.constant, "accent.constant"),
    "debugTokenExpression.error": requireDefined(status.error, "status.error"),

    "testing.iconPassed": requireDefined(status.success, "status.success"),
    "testing.iconFailed": requireDefined(status.error, "status.error"),
    "testing.iconErrored": requireDefined(status.error, "status.error"),
    "testing.iconSkipped": requireDefined(fg.muted, "fg.muted"),
    "testing.iconQueued": requireDefined(status.info, "status.info"),
    "testing.runAction": requireDefined(status.success, "status.success"),

    // ── Terminal ──────────────────────────────────────────────────
    "terminal.background": requireDefined(terminal.background, "terminal.background"),
    "terminal.foreground": requireDefined(terminal.foreground, "terminal.foreground"),
    "terminal.selectionBackground": requireDefined(bg.selection, "bg.selection"),
    "terminal.border": requireDefined(bg.overlay, "bg.overlay"),
    "terminal.ansiBlack": requireDefined(terminal.ansiBlack, "terminal.ansiBlack"),
    "terminal.ansiRed": requireDefined(terminal.ansiRed, "terminal.ansiRed"),
    "terminal.ansiGreen": requireDefined(terminal.ansiGreen, "terminal.ansiGreen"),
    "terminal.ansiYellow": requireDefined(terminal.ansiYellow, "terminal.ansiYellow"),
    "terminal.ansiBlue": requireDefined(terminal.ansiBlue, "terminal.ansiBlue"),
    "terminal.ansiMagenta": requireDefined(terminal.ansiMagenta, "terminal.ansiMagenta"),
    "terminal.ansiCyan": requireDefined(terminal.ansiCyan, "terminal.ansiCyan"),
    "terminal.ansiWhite": requireDefined(terminal.ansiWhite, "terminal.ansiWhite"),
    "terminal.ansiBrightBlack": requireDefined(
      terminal.ansiBrightBlack,
      "terminal.ansiBrightBlack"
    ),
    "terminal.ansiBrightRed": requireDefined(terminal.ansiBrightRed, "terminal.ansiBrightRed"),
    "terminal.ansiBrightGreen": requireDefined(
      terminal.ansiBrightGreen,
      "terminal.ansiBrightGreen"
    ),
    "terminal.ansiBrightYellow": requireDefined(
      terminal.ansiBrightYellow,
      "terminal.ansiBrightYellow"
    ),
    "terminal.ansiBrightBlue": requireDefined(terminal.ansiBrightBlue, "terminal.ansiBrightBlue"),
    "terminal.ansiBrightMagenta": requireDefined(
      terminal.ansiBrightMagenta,
      "terminal.ansiBrightMagenta"
    ),
    "terminal.ansiBrightCyan": requireDefined(terminal.ansiBrightCyan, "terminal.ansiBrightCyan"),
    "terminal.ansiBrightWhite": requireDefined(
      terminal.ansiBrightWhite,
      "terminal.ansiBrightWhite"
    ),
    "terminalCursor.foreground": requireDefined(
      terminal.cursorForeground,
      "terminal.cursorForeground"
    ),
    "terminalCursor.background": requireDefined(bg.base, "bg.base"),
    "terminalCommandDecoration.successBackground": requireDefined(
      status.success,
      "status.success"
    ),
    "terminalCommandDecoration.errorBackground": requireDefined(status.error, "status.error"),
    "terminalCommandDecoration.defaultBackground": requireDefined(fg.muted, "fg.muted"),

    // ── Text / settings / misc chrome ─────────────────────────────
    focusBorder: withAlpha(accent.keyword, "80"),
    foreground: requireDefined(fg.primary, "fg.primary"),
    "selection.background": requireDefined(bg.selection, "bg.selection"),
    descriptionForeground: requireDefined(fg.secondary, "fg.secondary"),
    errorForeground: requireDefined(status.error, "status.error"),
    disabledForeground: requireDefined(fg.disabled, "fg.disabled"),
    "icon.foreground": requireDefined(fg.secondary, "fg.secondary"),
    "toolbar.hoverBackground": requireDefined(bg.hover, "bg.hover"),
    "toolbar.activeBackground": requireDefined(bg.raised3, "bg.raised3"),

    "textLink.foreground": requireDefined(accent.function, "accent.function"),
    "textLink.activeForeground": requireDefined(accent.type, "accent.type"),
    "textPreformat.foreground": requireDefined(accent.keyword, "accent.keyword"),
    "textPreformat.background": requireDefined(bg.raised3, "bg.raised3"),
    "textCodeBlock.background": requireDefined(bg.raised2, "bg.raised2"),
    "textBlockQuote.background": requireDefined(bg.raised2, "bg.raised2"),
    "textBlockQuote.border": requireDefined(accent.keyword, "accent.keyword"),
    "textSeparator.foreground": requireDefined(bg.overlay, "bg.overlay"),

    "keybindingLabel.background": requireDefined(bg.raised3, "bg.raised3"),
    "keybindingLabel.foreground": requireDefined(fg.primary, "fg.primary"),
    "keybindingLabel.border": requireDefined(bg.overlay, "bg.overlay"),
    "keybindingLabel.bottomBorder": requireDefined(bg.overlay, "bg.overlay"),

    "settings.headerForeground": requireDefined(fg.bright, "fg.bright"),
    "settings.modifiedItemIndicator": requireDefined(accent.keyword, "accent.keyword"),
    "settings.focusedRowBackground": requireDefined(bg.selectionInactive, "bg.selectionInactive"),
    "settings.rowHoverBackground": requireDefined(bg.hover, "bg.hover"),

    "welcomePage.tileBackground": requireDefined(bg.raised2, "bg.raised2"),
    "welcomePage.tileHoverBackground": requireDefined(bg.hover, "bg.hover"),
    "welcomePage.tileBorder": requireDefined(bg.overlay, "bg.overlay"),
    "welcomePage.progress.background": requireDefined(bg.raised3, "bg.raised3"),
    "welcomePage.progress.foreground": requireDefined(accent.keyword, "accent.keyword"),

    "charts.foreground": requireDefined(fg.primary, "fg.primary"),
    "charts.lines": requireDefined(fg.muted, "fg.muted"),
    "charts.red": requireDefined(status.error, "status.error"),
    "charts.blue": requireDefined(status.info, "status.info"),
    "charts.yellow": requireDefined(status.warning, "status.warning"),
    "charts.orange": requireDefined(accent.storage, "accent.storage"),
    "charts.green": requireDefined(status.success, "status.success"),
    "charts.purple": requireDefined(accent.constant, "accent.constant"),

    "ports.iconRunningProcessForeground": requireDefined(status.success, "status.success"),
  };

  // TextMate: Actions → Structure → Data → Documentation → Noise
  const tokenColors = [
    {
      scope: ["comment", "punctuation.definition.comment", "comment.line", "comment.block"],
      settings: {
        foreground: requireDefined(fg.comment, "fg.comment"),
        fontStyle: "italic",
      },
    },
    {
      scope: ["string", "string.quoted", "string.template", "string.unquoted"],
      settings: {
        foreground: requireDefined(accent.string, "accent.string"),
      },
    },
    {
      // Numbers — coral + bold so literals pop (MAX_RETRIES = 3)
      scope: ["constant.numeric", "constant.numeric.integer", "constant.numeric.float"],
      settings: {
        foreground: requireDefined(accent.constant, "accent.constant"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: [
        "constant.language",
        "constant.other",
        "variable.language",
        "variable.language.this",
        "variable.language.super",
        "support.constant",
      ],
      settings: {
        foreground: requireDefined(accent.constant, "accent.constant"),
      },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.control.flow",
        "keyword.control.conditional",
        "keyword.control.loop",
        "keyword.control.switch",
        "keyword.control.trycatch",
        "keyword.control.await",
        "keyword.control.import",
        "keyword.control.export",
        "keyword.control.from",
        "keyword.operator.new",
        "keyword.other",
      ],
      settings: {
        foreground: requireDefined(accent.keyword, "accent.keyword"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: ["storage.type", "storage.type.function", "storage.type.class"],
      settings: {
        foreground: requireDefined(accent.storage, "accent.storage"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: ["storage.modifier", "storage.modifier.async"],
      settings: {
        foreground: requireDefined(accent.storage, "accent.storage"),
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "meta.decorator",
        "punctuation.decorator",
        "entity.name.function.decorator",
        "meta.decorator variable.other.readwrite",
      ],
      settings: {
        foreground: requireDefined(accent.decorator, "accent.decorator"),
        fontStyle: "italic bold",
      },
    },
    {
      // TODO / FIXME / @deprecated / NOTE — annotation badges
      scope: [
        "keyword.codetag",
        "keyword.codetag.notation",
        "comment.todo",
        "comment.todo.documentation",
        "storage.type.class.jsdoc",
        "entity.name.tag.documentation",
        "punctuation.definition.block.tag.jsdoc",
        "variable.other.jsdoc",
      ],
      settings: {
        foreground: requireDefined(accent.decorator, "accent.decorator"),
        fontStyle: "bold",
      },
    },
    {
      scope: ["entity.name.tag", "support.class.component", "entity.name.tag@supports"],
      settings: {
        foreground: requireDefined(accent.tag, "accent.tag"),
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call",
        "meta.function-call entity.name.function",
        "entity.name.function.member",
      ],
      settings: {
        foreground: requireDefined(accent.function, "accent.function"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "entity.other.inherited-class",
        "support.class",
        "support.type",
        "entity.name.scope-resolution",
        "entity.name.type.alias",
      ],
      settings: {
        foreground: requireDefined(accent.type, "accent.type"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: ["entity.name.type.interface", "support.type.interface"],
      settings: {
        foreground: requireDefined(accent.iface, "accent.iface"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: ["entity.name.type.enum", "support.type.enum"],
      settings: {
        foreground: requireDefined(accent.enum, "accent.enum"),
        ...(isLight ? { fontStyle: "bold" } : {}),
      },
    },
    {
      scope: ["entity.name.namespace"],
      settings: {
        foreground: requireDefined(accent.iface, "accent.iface"),
        fontStyle: "italic",
      },
    },
    {
      scope: ["variable", "variable.other", "variable.other.readwrite", "variable.other.object"],
      settings: {
        foreground: requireDefined(fg.primary, "fg.primary"),
      },
    },
    {
      scope: ["variable.parameter", "meta.function.parameters"],
      settings: {
        foreground: requireDefined(
          isLight ? accent.escape : fg.primary,
          "parameter"
        ),
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "variable.other.property",
        "variable.other.object.property",
        "meta.object-literal.key",
        "entity.other.attribute-name",
        "support.type.property-name",
        "support.type.property-name.css",
        "support.type.property-name.scss",
      ],
      settings: {
        foreground: requireDefined(accent.property, "accent.property"),
      },
    },
    {
      scope: ["string.regexp", "constant.regexp"],
      settings: {
        foreground: requireDefined(accent.regex, "accent.regex"),
      },
    },
    {
      scope: ["constant.character.escape", "constant.other.placeholder"],
      settings: {
        foreground: requireDefined(accent.escape, "accent.escape"),
      },
    },
    {
      scope: [
        "punctuation.definition.template-expression",
        "punctuation.section.embedded",
        "meta.template.expression",
      ],
      settings: {
        foreground: requireDefined(accent.escape, "accent.escape"),
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "keyword.operator",
        "keyword.operator.assignment",
        "keyword.operator.arithmetic",
        "keyword.operator.logical",
        "keyword.operator.comparison",
        "keyword.operator.ternary",
        "keyword.operator.expression",
        "keyword.operator.relational",
      ],
      settings: {
        foreground: requireDefined(accent.operator, "accent.operator"),
      },
    },
    {
      scope: [
        "punctuation",
        "punctuation.definition",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
        "meta.brace",
      ],
      settings: {
        foreground: requireDefined(accent.punctuation, "accent.punctuation"),
      },
    },
    // Markdown — strong first impression in README screenshots
    {
      scope: [
        "markup.heading",
        "markup.heading.markdown",
        "entity.name.section.markdown",
        "punctuation.definition.heading.markdown",
      ],
      settings: {
        foreground: requireDefined(accent.keyword, "accent.keyword"),
        fontStyle: "bold",
      },
    },
    {
      scope: ["markup.bold", "markup.bold.markdown"],
      settings: {
        foreground: requireDefined(accent.storage, "accent.storage"),
        fontStyle: "bold",
      },
    },
    {
      scope: ["markup.italic", "markup.italic.markdown"],
      settings: {
        foreground: requireDefined(accent.constant, "accent.constant"),
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.inline.raw", "markup.inline.raw.string.markdown", "markup.fenced_code.block.markdown"],
      settings: {
        foreground: requireDefined(accent.string, "accent.string"),
      },
    },
    {
      scope: ["markup.underline.link", "markup.underline.link.markdown", "string.other.link"],
      settings: {
        foreground: requireDefined(accent.function, "accent.function"),
        fontStyle: "underline",
      },
    },
    {
      scope: ["markup.list", "markup.list.numbered", "markup.list.unnumbered"],
      settings: {
        foreground: requireDefined(fg.primary, "fg.primary"),
      },
    },
    {
      scope: ["markup.quote", "markup.quote.markdown"],
      settings: {
        foreground: requireDefined(fg.comment, "fg.comment"),
        fontStyle: "italic",
      },
    },
    {
      scope: ["meta.separator.markdown", "punctuation.definition.thematic.break.markdown"],
      settings: {
        foreground: requireDefined(bg.overlay, "bg.overlay"),
      },
    },
    // JSON / YAML keys already covered by property; keep language constants
    {
      scope: ["support.type.property-name.json", "support.type.property-name.toml"],
      settings: {
        foreground: requireDefined(accent.property, "accent.property"),
      },
    },
    {
      scope: ["invalid", "invalid.deprecated", "invalid.illegal"],
      settings: {
        foreground: requireDefined(accent.invalid, "accent.invalid"),
        fontStyle: "underline",
      },
    },
  ];

  const semanticTokenColors = {
    "variable.readonly": {
      foreground: requireDefined(accent.escape, "accent.escape"),
    },
    "variable.defaultLibrary": {
      foreground: requireDefined(fg.primary, "fg.primary"),
    },
    variable: {
      foreground: requireDefined(fg.primary, "fg.primary"),
    },
    "variable.local": {
      foreground: requireDefined(fg.primary, "fg.primary"),
    },
    parameter: {
      foreground: requireDefined(
        isLight ? accent.escape : fg.primary,
        "parameter"
      ),
      fontStyle: "italic",
    },
    property: {
      foreground: requireDefined(accent.property, "accent.property"),
    },
    "property.readonly": {
      foreground: requireDefined(accent.escape, "accent.escape"),
    },
    "property.static": {
      foreground: requireDefined(accent.property, "accent.property"),
      fontStyle: "italic",
    },
    function: {
      foreground: requireDefined(accent.function, "accent.function"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    "function.declaration": {
      foreground: requireDefined(accent.function, "accent.function"),
      fontStyle: "bold",
    },
    method: {
      foreground: requireDefined(accent.function, "accent.function"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    "method.declaration": {
      foreground: requireDefined(accent.function, "accent.function"),
      fontStyle: "bold",
    },
    "method.static": {
      foreground: requireDefined(accent.function, "accent.function"),
      fontStyle: "italic",
    },
    class: {
      foreground: requireDefined(accent.type, "accent.type"),
      fontStyle: "bold",
    },
    interface: {
      foreground: requireDefined(accent.iface, "accent.iface"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    enum: {
      foreground: requireDefined(accent.enum, "accent.enum"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    enumMember: {
      foreground: requireDefined(accent.constant, "accent.constant"),
      ...(isLight ? { fontStyle: "italic" } : {}),
    },
    namespace: {
      foreground: requireDefined(accent.iface, "accent.iface"),
      fontStyle: "italic",
    },
    type: {
      foreground: requireDefined(accent.type, "accent.type"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    typeParameter: {
      foreground: requireDefined(accent.enum, "accent.enum"),
      fontStyle: "italic",
    },
    struct: {
      foreground: requireDefined(accent.type, "accent.type"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    decorator: {
      foreground: requireDefined(accent.decorator, "accent.decorator"),
      fontStyle: "italic bold",
    },
    macro: {
      foreground: requireDefined(accent.decorator, "accent.decorator"),
    },
    keyword: {
      foreground: requireDefined(accent.keyword, "accent.keyword"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    "keyword.control": {
      foreground: requireDefined(accent.keyword, "accent.keyword"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    "keyword.async": {
      foreground: requireDefined(accent.storage, "accent.storage"),
      fontStyle: "italic",
    },
    "keyword.static": {
      foreground: requireDefined(accent.storage, "accent.storage"),
      fontStyle: "italic",
    },
    operator: {
      foreground: requireDefined(accent.operator, "accent.operator"),
    },
    comment: {
      foreground: requireDefined(fg.comment, "fg.comment"),
      fontStyle: "italic",
    },
    string: {
      foreground: requireDefined(accent.string, "accent.string"),
    },
    number: {
      foreground: requireDefined(accent.constant, "accent.constant"),
      ...(isLight ? { fontStyle: "bold" } : {}),
    },
    regexp: {
      foreground: requireDefined(accent.regex, "accent.regex"),
    },
    "*.documentation": {
      foreground: requireDefined(fg.comment, "fg.comment"),
      fontStyle: "italic",
    },
    "*.deprecated": {
      foreground: requireDefined(accent.decorator, "accent.decorator"),
      fontStyle: "bold strikethrough",
    },
    unused: {
      foreground: requireDefined(fg.disabled, "fg.disabled"),
      fontStyle: "italic",
    },
    deprecated: {
      foreground: requireDefined(accent.decorator, "accent.decorator"),
      fontStyle: "bold strikethrough",
    },
  };

  return {
    name: tokens.meta.name,
    type: tokens.meta.type,
    semanticHighlighting: true,
    colors,
    tokenColors,
    semanticTokenColors,
  };
}

export function assertNoUndefined(value: unknown, path = "theme"): void {
  if (value === undefined) {
    console.error(`❌ Found undefined at ${path}`);
    process.exit(1);
  }
  if (value === null || typeof value !== "object") {
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => assertNoUndefined(item, `${path}[${i}]`));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    assertNoUndefined(child, `${path}.${key}`);
  }
}
