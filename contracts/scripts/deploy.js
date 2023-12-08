const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
async function main() {

   

  driver = await ethers.getContractFactory("Driver");
  console.log("1");
  driver = await driver.deploy("0xD8C99a04eE4611bfbe3822606242bCcD59cAB160");
  console.log("2");
  console.log("driver address: ",driver.target);

    sleep(5000)

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
