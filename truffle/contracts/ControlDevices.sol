// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

contract ControlDevices {

    address public owner;  
    uint public id = 0;

    event device_event(string name);

    // sensor that will contains name and status sent by our device
    
    struct device{
        string name;
        bool status;
    }
    
    // map to store our data with device info in it
    
    mapping(uint=>device) public Devices;
    
    // setting the owner
    
    constructor() {
       owner = msg.sender;
    }

    // adding the device 

    function add_device(string memory device_name) public{
        require(msg.sender == owner);
        Devices[++id] = device(device_name, false);
    }

    // removing the device 

    function remove_device(uint _id) public{
        require(msg.sender == owner);

        delete Devices[_id];
    }
    
    // checking the status of device whether it's on or off
    
    function device_status(device memory d) public view returns(bool) {
        require(msg.sender == owner);
        return d.status;
    }
    
    // changing the device's status
    
    function change_device_status(device memory d) public view {
        require(msg.sender == owner);
        if(d.status==true) {
            d.status = false;
        }
        else {
            d.status = true;
        }
    }
    
    function device_mapping_test(uint _id) public {
        emit device_event(Devices[_id].name);
    }

}