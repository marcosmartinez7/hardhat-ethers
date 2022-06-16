const hre = require("hardhat");

async function main() {
  const { ethers } = hre;
  console.log(
    await ethers.provider.getBalance(
      "0xB5d161f3A4F49878dd4c8ace3A01f9126EA621f5"
    )
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
