require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

//const fauxPrivKey = "";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers:[
      {
        version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true
    },
      },
      {
        version: "0.8.20"
      }
    ]
  },
  networks: {
    mumbai: {
      url: "https://polygon-mumbai-pokt.nodies.app",
      chainId: 80001,
      accounts: [process.env.PRIVATE_KEY],
    },
    holesky: {
      chainId: 17000,
      url: "https://ethereum-holesky.publicnode.com",
      accounts: [process.env.PRIVATE_KEY],
    },

    //     sepolia: {
    //       url: "https://eth-sepolia.public.blastapi.io",
    //       chainId: 11155111,
    //       accounts: ["0x49aedcb270360f4fc06d268b0f054c3e6db89592047bb2b9dffd9e24d08c68f1"],
    //     },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
      accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    },
    // georli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/Af3-oLXm8kIIhrd3Y0M-KFIlPlYFHK7i",
    //   // url: "https://goerli.blockpi.network/v1/rpc/public",
    //   chainId: 5,
    //   accounts: ["PrivateKey"],
    // },
    // ethereum: {
    //   url: "https://eth-mainnet.g.alchemy.com/v2/GytobybHVB70-uf1UM-OlDn6l0-CpRjj",
    //   chainId: 1,
    //   // accounts: ["49aedcb270360f4fc06d268b0f054c3e6db89592047bb2b9dffd9e24d08c68f1"],
    //   accounts: ["1eede3c52280c83f1299fc158a0c2d4113aa8e60da14f15ad9db67275ddf3c30"],
    // },
  },
  etherscan: {
    // apiKey: '7G55AXWPUYEDNBEBH8HDMWP4J3TJG9MK9W',   //mumbai

    apiKey: {
      polygonMumbai: '7G55AXWPUYEDNBEBH8HDMWP4J3TJG9MK9W'
    }

  },
};
