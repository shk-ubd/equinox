/**
 * Builds all Emberglass theme variants from token sources.
 * GENERATED FILE reminder — do not hand-edit themes/*.json. Always run `npm run build`.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { tokens as emberglassDark } from "../src/tokens/emberglass-dark.ts";
import { tokens as emberglassLight } from "../src/tokens/emberglass-light.ts";
import type { ThemeTokens } from "../src/tokens/types.ts";
import {
  assertNoUndefined,
  buildThemeFromTokens,
} from "./theme-from-tokens.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const themesDir = join(root, "themes");

const variants: ThemeTokens[] = [emberglassDark, emberglassLight];

mkdirSync(themesDir, { recursive: true });

for (const tokens of variants) {
  const theme = buildThemeFromTokens(tokens);
  assertNoUndefined(theme);

  const outPath = join(themesDir, tokens.meta.fileName);
  const json = JSON.stringify(theme, null, 2);
  if (json.includes('"undefined"') || json.includes(": undefined")) {
    console.error(`❌ Generated JSON contains undefined values (${tokens.meta.name})`);
    process.exit(1);
  }

  writeFileSync(outPath, json + "\n", "utf8");
  console.log(`✅ ${tokens.meta.name} theme built successfully`);
}
