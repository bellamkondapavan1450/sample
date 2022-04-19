var ControlDevices = artifacts.require("ControlDevices");
module.export = function(deployer) {
    deployer.deploy(ControlDevices);
}