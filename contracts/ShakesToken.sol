// SPDX-License-Identifier: MIT
pragma solidity 0.7.4;

import "http://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.2.1-solc-0.7/contracts/token/ERC777/ERC777.sol";
import "http://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.2.1-solc-0.7/contracts/token/ERC777/IERC777Sender.sol";
import "http://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.2.1-solc-0.7/contracts/token/ERC777/IERC777Recipient.sol";
import "http://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.2.1-solc-0.7/contracts/introspection/ERC1820Implementer.sol";
import "http://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.2.1-solc-0.7/contracts/introspection/IERC1820Registry.sol";

contract TestERC777 is ERC777 {
    constructor(
        uint256 initialSupply,
        address[] memory defaultOperators
    ) ERC777("Shakes", "HSB", defaultOperators) {
        _mint(msg.sender, initialSupply, "", "");
    }
}