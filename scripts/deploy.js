// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const maxnum = 10;
  const myaddress = "0x21E12AfA5D29BDa1e19126fB8540D53E650b7587";
  const whitelistcontract = await hre.ethers.getContractFactory("Whitelist");
  const contract = await whitelistcontract.deploy(maxnum);
  await contract.deployed();
  console.log(`The contract is deployed to ${contract.address}`);

  const addaddress = await contract.addAddressToWhitelist(myaddress);
  await addaddress.wait();
  console.log(`the address ${myaddress} is added to the network`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
