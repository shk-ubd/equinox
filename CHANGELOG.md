# Changelog

All notable changes to Emberglass will be documented in this file.

## [1.0.0] — 2026-08-01

### Added

- **Emberglass Light** — WCAG-solved warm paper palette (`#F2EFE7`); equal-weight accents (~5.5:1); border-forward elevation (not a Dark re-tint)
- **Emberglass Dark** as a full design language (not a palette swap)
- Temperature-coded semantics: warm actions → cool structure → natural data → muted docs → graphite noise
- High-contrast smoked-glass workbench with deliberate elevation steps
- Dedicated input / widget / hover surfaces (agent + chat typing fields stay readable)
- Full semantic highlighting, 6-stop bracket cycle, matched terminal ANSI
- Markdown, template-expression, JSON/CSS property scopes
- Inline chat / Copilot-style surfaces, sticky scroll, minimap, debug, testing, merge, charts
- Shared `ThemeTokens` contract so **Emberglass Light** can ship later
- `src/preview/syntax-sample.ts` for Extension Development Host screenshots

### Palette identity

- Molten gold keywords `#FFB86A`, ember storage `#FF7A45`, salmon decorators `#FF6B7A`
- Electric sky functions `#4DBFFF`, luminous periwinkle types `#B8C4FF`
- Vivid cyan properties `#5CD6E8`, warm olive strings `#D6E07A`, orchid constants `#F0A0DC`
- Green families separated: olive (strings) ≠ cyan (properties) ≠ mint (git) ≠ pure ANSI green
