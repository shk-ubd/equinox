# Emberglass

*Syntax that teaches you the code, not just decorates it.*

Emberglass is a design system for the editor — not another recolored dark theme. One second on a screenshot should be enough to recognize it.

## Why Emberglass is different

Most themes replace a palette. Emberglass reorganizes how code is perceived. Warm tones mark **actions** (keywords, control flow, storage, decorators). Cool tones mark **structure** (types, classes, functions, namespaces). Natural tones mark **data** (strings, constants). Muted tones mark **documentation**. Cool graphite marks **noise** (operators, punctuation). The eye learns hierarchy before it finishes reading the line.

Depth is intentional: Dark uses smoked-glass elevation; Light keeps background steps extremely subtle and puts separation into borders. Semantic highlighting reinforces the same ladder across both variants.

Nothing here is chosen because “most themes do this.” Every accent has a hue role, a luminance role, and a semantic job.

## Two variants, one system

**Emberglass Light is not a re-tint of the dark theme.** It shares the same nine accent *hues* as Dark, but every lightness value was independently solved via WCAG contrast math for a warm paper background (`#F2EFE7`) — targeting ~5.5:1 for accents (vs. a higher target on Dark, since light and dark canvases need different ratios for equivalent perceived legibility).

### Why naive light forks fail

The common Marketplace failure mode: drop dark-theme accent hexes onto white unchanged. They look fine in an icon preview and fall apart when you actually read code. Against pure `#FFFFFF`:

| Dark accent (example family) | Contrast vs `#FFFFFF` | Result |
| --- | --- | --- |
| Keyword-class coral | ~2.66:1 | **fails AA** (needs 4.5:1) |
| Function-class teal | ~2.65:1 | **fails AA** |
| String-class olive | ~2.66:1 | **fails AA** |
| Constant-class amber | ~2.67:1 | **fails AA** |

That is roughly half the legal minimum for body text — washed-out accents and eye strain within minutes. Emberglass Light does **not** reuse a single Dark hex for accents; each color was solved for equal visual weight (~5.50–5.60:1) on `#F2EFE7`.

Two further Light-specific decisions:

1. **Background is not white.** `#F2EFE7` is warm paper (~15% dimmer than stark white) — a printed page under even light, not a phone flashlight.
2. **Elevation is border-forward.** Background steps stay ~1.04–1.11:1; panel separation comes from `bg.overlay` `#CBC1AB` (~1.55:1).

## Screenshot

![Emberglass Dark](images/screenshot-main.png)

## Installation

### From the Marketplace

1. Open the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`).
2. Search for **Emberglass**.
3. Click **Install**, then select **Emberglass Dark** or **Emberglass Light** from the Color Theme picker (`Ctrl+K Ctrl+T` / `Cmd+K Ctrl+T`).

Marketplace link (after publish): `https://marketplace.visualstudio.com/items?itemName=REPLACE_WITH_YOUR_PUBLISHER_ID.emberglass`

### Manual VSIX install

1. Download the `.vsix` from a [release](REPLACE_WITH_REPO_URL/releases) or build locally with `npm run package`.
2. In VS Code / Cursor: **Extensions** → `⋯` → **Install from VSIX…**
3. Choose `emberglass-1.0.0.vsix` and reload if prompted.

## Recommended settings

```json
{
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.semanticHighlighting.enabled": true
}
```

## Design language

### Dark

Smoked-glass elevation on deep graphite / blue-neutral surfaces. Token source: `src/tokens/emberglass-dark.ts`.

### Light (verified)

| Role | Hex | Notes |
| --- | --- | --- |
| Editor paper | `#F2EFE7` | warm, dimmed — not `#FFFFFF` |
| Borders | `#CBC1AB` | primary separation |
| Keywords | `#B81E38` | ~5.57:1 |
| Storage | `#A43F1B` | ~5.53:1 |
| Functions | `#116A68` | ~5.56:1 |
| Types | `#2158C8` | ~5.55:1 |
| Properties | `#126E3D` | ~5.50:1 |
| Strings | `#526611` | ~5.59:1 |
| Constants | `#875316` | ~5.57:1 |

Token source: `src/tokens/emberglass-light.ts`. Both variants share one `ThemeTokens` → JSON build pipeline (`npm run build`).

## License

MIT. Contributions welcome — open an issue or PR with clear before/after screenshots when proposing palette changes. Prefer usability justifications (contrast ratios, long-session comfort) over familiarity with other themes.
