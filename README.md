# Ibutsu Backstage Plugin

## Prerequisite

You will need the Red Hat IT root cert otherwise the following error will occur when  
fetching data from the Ibutsu API:
```
UNABLE_TO_GET_ISSUER_CERT_LOCALLY
```

Once you follow the instruction for receiving the CA cert set the following environment  
variable:
```
export NODE_EXTRA_CA_CERTS=/path/to/ca/cert
```

## Run Locally
```
yarn install
yarn dev
```

---
Made with ❤️ @ Red Hat
