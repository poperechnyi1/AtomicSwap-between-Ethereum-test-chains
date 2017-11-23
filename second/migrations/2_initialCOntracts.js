var HTLC = artifacts.require("./HTLC.sol");
var HTLC2 = artifacts.require("./HTLC2.sol");

module.exports = function(deployer) {
  deployer.deploy(HTLC);
  deployer.deploy(HTLC2);
};
