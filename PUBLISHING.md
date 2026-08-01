# Publishing Equinox

## Before you publish (checklist)

- [ ] Create a [Marketplace publisher](https://marketplace.visualstudio.com/manage) (free Microsoft account)
- [ ] Set `publisher` in `package.json` to your **publisher ID** (lowercase, e.g. `jane-doe` — not the display name)
- [ ] Create a GitHub repo and replace `YOUR_GITHUB_USERNAME` in `package.json` (`repository`, `bugs`, `homepage`)
- [ ] Confirm `icon.png` looks sharp at 128×128 (Marketplace shows it small)
- [ ] Confirm `images/screenshot-main.png` matches the current Dark or Light look (update if outdated)
- [ ] Run `npm run build` and spot-check both themes in Extension Development Host (F5)
- [ ] Read [Marketplace publisher agreement](https://cdn.vsassets.io/v/2_20110101/prod/Official/Content/Marketplace/Marketplace%20Publisher%20Agreement.pdf)

## Create a Personal Access Token

1. Azure DevOps → User settings → Personal access tokens
2. Organization: **All accessible organizations**
3. Scopes: **Marketplace → Manage**
4. Copy the token (shown once)

```bash
npx vsce login your-publisher-id
# paste PAT when prompted
```

## Package & publish

```bash
npm run package    # builds themes + creates equinox-1.0.0.vsix
npx vsce publish   # or: npm run publish
```

Dry-run file list (no upload):

```bash
npx vsce ls
```

## After publish

- Marketplace URL: `https://marketplace.visualstudio.com/items?itemName=your-publisher-id.equinox`
- Optional: also publish to [Open VSX](https://open-vsx.org/) for VSCodium / some Cursor setups (`npx ovsx publish`)

## Version bumps

Follow semver in `package.json` + add a `CHANGELOG.md` entry before each publish.
