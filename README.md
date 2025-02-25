# Ibutsu Backstage Plugin

This is a development mono-repo for the Ibutsu plugin. This mono-repo was created using @backstage/create-app to provide a backend and frontend for the plugin to integrate with.

You can find the plugin code in `plugins/ibutsu`

## Configuration

In `app-config.yaml` declare the variables `IBUTSU_URL` and `IBUTSU_API_TOKEN`:

```yaml
proxy:
  endpoints:
    '/ibutsu': 
      target: ${IBUTSU_URL}
      headers:
        Authorization: Bearer ${IBUTSU_API_TOKEN}
```

Also in `app-config.yaml` add `redhatinsights.backstage-plugin-ibutsu` and the card component configs into the dynamic plugins section.

```yaml
dynamicPlugins:
  frontend:
    redhatinsights.backstage-plugin-ibutsu:
      mountPoints:
        - mountPoint: entity.page.overview/cards
          importName: EntityIbutsuContent
          config:
            layout:
              gridColumnEnd:
                lg: "span 4"
                md: "span 4"
                xs: "span 4"
```

You will need the Red Hat IT root cert otherwise the following error will occur when  
fetching data from the Ibutsu API:

```sh
UNABLE_TO_GET_ISSUER_CERT_LOCALLY
```

Once you follow the instruction for receiving the CA cert set the following environment  
variable:

```sh
export NODE_EXTRA_CA_CERTS=/path/to/ca/cert
```

## Catalog
Migrate the `catalog_example` directory to the default `catalog` directory.
```
cp -r catalog_example catalog
```

## Development

To start the app, run:

```sh
yarn install
yarn dev
```

---
Made with ❤️ @ Red Hat
