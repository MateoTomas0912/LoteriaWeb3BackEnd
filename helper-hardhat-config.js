const { ethers } = require("hardhat");

const networkConfig = {
  5: {
    name: "goerli",
    subscriptionId: "6730",
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    entranceFee: ethers.utils.parseEther("0.1"),
    callbackGasLimit: "500000", // 500,000 gas
    vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
    interval: "30",
  },
  31337: {
    name: "hardhat",
    entranceFee: ethers.utils.parseEther("0.01"),
    gasLane:
      "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
    interval: "30",
    callbackGasLimit: "500000", // 500,000 gas
  },
};

const developmentChains = ["hardhat", "localhost"];
const frontEndContractsFile =
  "../LoteriaWeb3FrontEnd/loteria-web3-frontend/constants/contractAdresses.json";
const frontEndAbiFile =
  "../LoteriaWeb3FrontEnd/loteria-web3-frontend/constants/abi.json";

module.exports = {
  networkConfig,
  developmentChains,
  frontEndContractsFile,
  frontEndAbiFile,
};
