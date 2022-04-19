var DataDevices = artifacts.require("DataDevices");
module.export = function(deployer) {
    deployer.deploy(DataDevices);
}