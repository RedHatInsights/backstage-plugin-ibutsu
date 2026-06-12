# Architecture

## Overview

`backstage-plugin-ibutsu` is a Backstage application (v1.48.0) with a bundled frontend plugin for
displaying test run data from an Ibutsu API server. The repo is a Yarn workspace monorepo with three
workspaces: a frontend app (`packages/app`), a backend app (`packages/backend`), and the Ibutsu
plugin (`plugins/ibutsu`).

The plugin operates entirely on the frontend — there is no dedicated backend plugin. All data flows
through Backstage's built-in proxy backend, which forwards `/api/proxy/ibutsu/` requests to the
external Ibutsu API at `https://ibutsu-api.insights.corp.redhat.com`.

## Directory Layout

```
packages/
  app/               Frontend: Backstage app shell, catalog pages, entity layout
  backend/           Backend: plugin wiring, proxy config, Docker image
plugins/
  ibutsu/            Frontend plugin: test run viewer, entity tab extension
examples/            Catalog entities, scaffolder template, org demo data
```

## Plugin Architecture

The Ibutsu plugin (`@redhatinsights/backstage-plugin-ibutsu` v0.1.3) is a frontend-only plugin with
a single component extension registered as an entity tab:

- **Registration** (`src/plugin.ts`): `createPlugin({ id: 'ibutsu' })` with a lazy-loaded
  `EntityIbutsuContent` component extension. No routes, no API refs, no standalone page.
- **Entry** (`src/index.ts`): Exports `IbutsuPlugin` and `EntityIbutsuContent`.
- **Component** (`src/components/IbutsuComponent/IbutsuComponent.tsx`): A paginated table of test
  runs with colored summary pills (passed, failed, skipped, etc.). Supports loading, error, and
  empty states.
- **Data hooks** (`src/common/`):
  - `QueryHealthData` — fetches `{backend.baseUrl}/api/proxy/ibutsu/api/health/info` to resolve the
    Ibutsu frontend URL used for run detail links.
  - `QueryRunsData` — fetches `{backend.baseUrl}/api/proxy/ibutsu/api/run` filtered by component
    name, using `useEntity()` from `@backstage/plugin-catalog-react` to read the current entity.

The plugin does not define a typed `IbutsuApi` interface or use Backstage's API system. Hooks call
`fetchApiRef` directly, diverging from the conventional Backstage plugin pattern.

## Data Flow

```
Ibutsu API (external)        Backstage Backend          Backstage Frontend
                            (proxy-backend)
                                   │
  /api/health/info    ◄────────── GET ─────────────    QueryHealthData
  /api/run?filter=    ◄────────── GET ─────────────    QueryRunsData
    component=<name>
                                   │
                            Adds Authorization
                            header from
                            IBUTSU_AUTH_TOKEN env
```

1. User navigates to a service entity's "Ibutsu" tab (`/catalog/.../ibutsu`).
2. `IbutsuComponent` mounts and calls both hooks in parallel.
3. Hooks use `fetchApiRef` to call `{backend.baseUrl}/api/proxy/ibutsu/api/...`.
4. Backstage proxy backend forwards to the external Ibutsu API with the `IBUTSU_AUTH_TOKEN` header.
5. Test run results are paginated client-side (page size: 5) and rendered in a Material UI table.

### Component Name Resolution

The `IbutsuComponent` filters runs for the current catalog entity by resolving a component name:

1. Checks the `ibutsu/component-name` annotation on the entity.
2. Falls back to `entity.metadata.name.substring(0, name.indexOf("-"))`.

## Proxy Configuration

From `app-config.yaml`:

```yaml
proxy:
  '/ibutsu':
    target: https://ibutsu-api.insights.corp.redhat.com
    secure: false
    headers:
      Authorization: ${IBUTSU_AUTH_TOKEN}
```

- `secure: false` permits corporate/self-signed TLS certificates.
- The `IBUTSU_AUTH_TOKEN` environment variable must be set at runtime.

## Entity Integration

The Ibutsu tab is registered in `packages/app/src/components/catalog/EntityPage.tsx` on the
`serviceEntityPage` layout only — it appears exclusively for `Component` entities of type `service`.

## Build System

- **Package manager:** Yarn 4.4.1 with `nodeLinker: node-modules`.
- **Monorepo tool:** Yarn workspaces + `@backstage/cli` v0.35.4.
- **Commands:** `yarn build:all`, `yarn test`, `yarn lint:all`.

### Dynamic Plugin Build

The plugin supports both static bundling and dynamic loading via Scalprum/janus-idp. The `build`
script at repo root runs `janus-cli package export-dynamic-plugin` and `npm pack`s the result into a
`.tgz` tarball for runtime injection into a Scalprum-compatible Backstage shell.

## Deployment

A single-stage Dockerfile at `packages/backend/Dockerfile` produces a production image:

- **Base:** `node:24-trixie-slim`
- **Process:** Copies pre-built backend bundle, runs `yarn workspaces focus --production`, starts
  with `node packages/backend --config app-config.yaml --config app-config.production.yaml`.
- **Privilege:** Runs as the `node` user.

## Database

| Environment | Driver | Connection |
|---|---|---|
| Development | `better-sqlite3` | In-memory |
| Production | `pg` | PostgreSQL (configured via env vars) |

## Key Technical Decisions and Tradeoffs

- **No backend plugin.** Choosing to proxy through the Backstage backend rather than building a
  dedicated Ibutsu backend plugin reduces code and deployment complexity but limits the ability to
  transform, cache, or fan-out API responses on the server side.
- **Direct fetch in hooks.** The plugin uses `fetchApiRef` directly instead of defining a typed API
  interface + implementation. This is simpler for a single-endpoint plugin but deviates from
  Backstage conventions and makes testing and mock substitution harder.
- **Client-side pagination.** All 50 results are fetched at once and paginated in the browser. This
  works for typical run volumes but will not scale to hundreds or thousands of runs without server-
  side pagination.

## Technical Debt

- `plugins/ibutsu/src/components/IbutsuComponent/TestComponent.tsx` — a MUI DataGrid demo with
  hardcoded data, not referenced by any component.
- `@ibutsu/client` is declared as a dependency in `plugins/ibutsu/package.json` and has type stubs
  in `@types/ibutsu.d.ts`, but the plugin makes direct HTTP calls instead of using the client.
- `dev/index.js` (compiled JS) exists alongside the source `dev/index.tsx` and is likely stale.
