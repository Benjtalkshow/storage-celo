require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    alfajores: {
      url: process.env.CELO_ALFAJORES_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
etherscan: {
  apiKey: process.env.EXPLORER_API_KEY,
  customChains: [
    {
      network: "alfajores",
      chainId: 44787,
      urls: {
        apiURL: "https://api-alfajores.celoscan.io/api",
        browserURL: "https://alfajores.celoscan.io",
      },
    },
  ],
}

};
