# backstage-plugin-ibutsu

## Project Overview

A Backstage application (v1.48.0) with a bundled frontend plugin that displays test run data from an
Ibutsu API server. The plugin adds an "Ibutsu" tab to service entity pages, showing paginated test
results with status summaries. The project is a private Yarn workspace monorepo with three
workspaces: `packages/app`, `packages/backend`, and `plugins/ibutsu`.

## Dependencies

**Runtime:** Node.js >= 22, Backstage v1.48.0, React 18, Material UI 4/5, better-sqlite3 (dev),
pg (production).

**Dev/Test:** TypeScript ~5.8, Jest v30, Playwright v1.32, ESLint, Prettier v2.3, @testing-library/react.

## Development Commands

See [Development Setup](./README.md#development) in the README for the full command reference.

Agent-specific commands:

```sh
yarn lint:all          # lint all packages (ESLint + Prettier check)
yarn tsc               # TypeScript type checking
```

## Architecture

The project is a standard Backstage app scaffold (frontend app + backend app) with one custom
frontend plugin (`plugins/ibutsu`). The plugin registers a single component extension for entity
tabs and proxies all API requests through the Backstage proxy backend — there is no backend plugin.
See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full data flow, proxy configuration, design
decisions, and technical debt.

## Code Style

- **TypeScript** ~5.8 with strict type checking.
- **ESLint** via `@backstage/cli/config/eslint-factory` (authoritative).
- **Prettier** v2.3 with config from `@backstage/cli/config/prettier` (line length 120).
- **Formatting check:** `yarn prettier:check` — not run in CI, only locally.
- **lint-staged** is configured in `package.json` for `*.{js,jsx,ts,tsx,mjs,cjs}` and
  `*.{json,md}` but **does not execute** — no git hook manager (husky/lefthook) is installed.

## Common Mistakes

1. **Unused dependencies.** `@ibutsu/client` is declared as a dependency and has type stubs, but
   the plugin uses `fetchApiRef` directly instead of the client. Do not import `@ibutsu/client` in
   new code — use `fetchApiRef` or migrate to a typed API interface.

2. **Dead code.** `plugins/ibutsu/src/components/IbutsuComponent/TestComponent.tsx` is a MUI
   DataGrid demo with hardcoded data that is not imported anywhere. Do not reference or modify it;
   it is slated for removal.

3. **Entity scoping.** The Ibutsu tab is registered on `serviceEntityPage` only. Changes to entity
   page layout belong in `packages/app/src/components/catalog/EntityPage.tsx`, not in the plugin
   itself.

4. **Component name resolution.** The plugin falls back to truncating `entity.metadata.name` at the
   first `-` character to derive a component name. This heuristic is fragile for non-standard naming.
   Prefer setting the `ibutsu/component-name` annotation on the entity instead.

## Testing

```sh
yarn test                    # unit tests (Jest)
yarn test:all                # all tests with coverage
yarn test:e2e                # e2e tests (Playwright)
```

CI runs `yarn test --coverage --maxWorkers 3` on every push.

## Deployment

Docker image via `packages/backend/Dockerfile` (node:24-trixie-slim). Build with `yarn build-image`.
Requires `IBUTSU_AUTH_TOKEN` and PostgreSQL connection env vars in production.
