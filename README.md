# backstage-plugin-ibutsu

A Backstage application (v1.48.0) with a bundled frontend plugin that displays test run data from an
[Ibutsu](https://ibutsu-api.insights.corp.redhat.com) API server. The plugin adds an "Ibutsu" tab
to service entity pages, showing paginated test results with status summaries.

## Prerequisites

- **Node.js** >= 22
- **Yarn** 4.x (see `package.json` for exact version)
- Access to the Ibutsu API and an `IBUTSU_AUTH_TOKEN` environment variable

## Installation

```sh
yarn install
```

## Development

Start the full Backstage application:

```sh
yarn start
```

The app runs at `http://localhost:3000` with the backend at `http://localhost:7007`.

### Plugin development (standalone)

Run the Ibutsu plugin in isolation:

```sh
cd plugins/ibutsu
yarn start
```

### Testing

```sh
yarn test              # unit tests (Jest)
yarn test:e2e          # e2e tests (Playwright)
yarn test:all          # all tests with coverage
```

### Linting

```sh
yarn lint:all          # ESLint
yarn prettier:check    # Prettier formatting check
```

## Deployment

Build the backend and run in production:

```sh
yarn build:backend
# or build a Docker image:
yarn build-image
```

Set the required environment variables:

- `IBUTSU_AUTH_TOKEN` — authentication token for the Ibutsu API
- `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_USER`, `POSTGRES_PASSWORD` — production database

Start with production config:

```sh
node packages/backend --config app-config.yaml --config app-config.production.yaml
```

## Plugin Usage

The Ibutsu plugin (`@redhatinsights/backstage-plugin-ibutsu`) adds an entity tab to service
components. To use it:

1. Register a service entity in the catalog (see `examples/entities.yaml`).
2. Annotate the entity with `ibutsu/component-name` if the component name differs from the entity
   name (otherwise the plugin infers it by truncating at the first `-`).
3. Navigate to the entity's "Ibutsu" tab to view test runs.

The plugin proxies requests through the Backstage backend at `/api/proxy/ibutsu/`. See
[ARCHITECTURE.md](ARCHITECTURE.md) for data flow details.

## Dynamic Plugin Build

The plugin can be packaged as a Scalprum dynamic plugin:

```sh
./build
```

Outputs a `.tgz` tarball for runtime injection into a Scalprum-compatible Backstage shell.

## License

Apache-2.0
