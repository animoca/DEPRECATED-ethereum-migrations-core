module.exports = {
  networks: {
    //----------------------------//
    //        DEVELOPMENT         //
    //----------------------------//
    hardhat: {
      // chainId 31337
      live: false,
      companionNetworks: {
        ethereum: 'hardhat',
        polygon: 'hardhat',
        bsc: 'hardhat',
        okex: 'hardhat',
      },
      tags: ['dev'],
    },
    localhost: {
      // chainId 1337
      live: false,
      companionNetworks: {
        ethereum: 'localhost',
        polygon: 'localhost',
        bsc: 'localhost',
        okex: 'localhost',
      },
      tags: ['dev'],
    },

    //----------------------------//
    //          ETHEREUM          //
    //----------------------------//

    // Staging
    ropsten: {
      // chainId 3
      url: 'ropsten',
      live: true,
      tags: ['staging', 'ethereum'],
    },
    rinkeby: {
      // chainId 4
      url: 'rinkeby',
      live: true,
      companionNetworks: {
        bsc: 'bsctest',
        okex: 'okextest',
      },
      tags: ['staging', 'ethereum'],
    },
    goerli: {
      // chainId 5
      url: 'goerli',
      live: true,
      companionNetworks: {
        polygon: 'mumbai',
      },
      tags: ['staging', 'ethereum'],
    },
    kovan: {
      // chainId 42
      url: 'kovan',
      live: true,
      tags: ['staging', 'ethereum'],
    },

    // Production
    mainnet: {
      // chainId 1
      url: 'mainnet',
      live: true,
      companionNetworks: {
        polygon: 'matic',
        bsc: 'bsc',
        okex: 'okex',
      },
      tags: ['production', 'ethereum'],
    },

    //----------------------------//
    //          POLYGON           //
    //----------------------------//

    // Staging
    mumbai: {
      // chainId 80001
      // https://static.matic.network/network/testnet/mumbai/index.json
      url: 'mumbai',
      live: true,
      companionNetworks: {
        ethereum: 'goerli',
      },
      tags: ['staging', 'polygon'],
    },

    // Production
    matic: {
      // chainId 137
      // https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json
      url: 'matic',
      live: true,
      companionNetworks: {
        ethereum: 'mainnet',
      },
      tags: ['production', 'polygon'],
    },

    //----------------------------//
    //    BINANCE SMART CHAIN     //
    //----------------------------//
    // https://docs.binance.org/smart-chain/developer/rpc.html

    // Staging
    bsctest: {
      // chainId 97
      url: 'bsctest',
      live: true,
      companionNetworks: {
        ethereum: 'rinkeby',
      },
      tags: ['staging', 'bsc'],
    },

    // Production
    bsc: {
      // chainId 56
      url: 'bsc',
      live: true,
      companionNetworks: {
        ethereum: 'mainnet',
      },
      tags: ['production', 'bsc'],
    },

    //----------------------------//
    //         OKEX CHAIN         //
    //----------------------------//

    okextest: {
      // chainId 65
      // https://okexchain-docs.readthedocs.io/en/latest/developers/quick-start.html
      url: 'okextest',
      live: true,
      companionNetworks: {
        ethereum: 'rinkeby',
      },
      tags: ['staging', 'okex'],
    },
    okex: {
      // chainId 66
      // https://okexchain-docs.readthedocs.io/en/latest/developers/quick-start-for-mainnet.html
      url: 'okex',
      live: true,
      companionNetworks: {
        ethereum: 'mainnet',
      },
      tags: ['production', 'okex'],
    },
  },
};
