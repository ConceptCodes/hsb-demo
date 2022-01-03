// SPDX-License-Identifier: MIT

pragma solidity 0.7.4;

import "@openzeppelin/contracts/presets/ERC777PresetFixedSupply.sol";

contract ShakesToken is ERC777PresetFixedSupply {
    uint256 private treasuryAddress;
    uint256 private initialSupply = 2150000000; // 21.5 billion
    constructor(
        address[] memory defaultOperators
    ) ERC777PresetFixedSupply("Shakes", "HSB", defaultOperators, initialSupply, treasuryAddress) { }
}