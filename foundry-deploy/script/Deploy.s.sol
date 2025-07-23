// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

import "forge-std/Script.sol";
import "../src/Storage.sol";

contract Deploy is Script {
    function run() external {
        vm.startBroadcast();
        new Storage();
        vm.stopBroadcast();
    }
}
