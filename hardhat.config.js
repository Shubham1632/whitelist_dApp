require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");

const rpc_url = process.env.goerli_rpc;
const private_key = process.env.goerli_private_key;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: rpc_url,
      accounts: [private_key],
      chainId: 5,
    },
  },
};
