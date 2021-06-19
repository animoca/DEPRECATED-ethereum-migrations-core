# node-providers HardHat plugin

Manage node provider URLs.

Allows to use different node providers for networks without a `url`. Providers are defined in `config.providers`. Networks can define a `defaultProvider` which must reference an existing provider/network configuration. The environment variable NODE_PROVIDER can be used to override the `defaultProvider` or apply a provider url to a network without a `defaultProvider`.

`hardhat.config` example:

```javascript
module.exports = {
  // ...
  networks: {
    rinkeby: {
      defaultProvider: "infura",
    },
    rinkeby_test: {
      // can only be used with a NODE_PROVIDER env variable to set the provider
      // ...
    },
    mainnet: {
      defaultProvider: "alchemy",
    },
  },
  providers: {
    infura: {
      rinkeby: "http://...",
    },
    alchemy: {
      rinkeby: "http://...",
      mainnet: "http://...",
    },
  },
};
```

```bash
hardhat deploy --network rinkeby # runs with default 'infura' provider url
PROVIDER=alchemy hardhat deploy --network rinkeby # runs with 'alchemy' provider url
```
