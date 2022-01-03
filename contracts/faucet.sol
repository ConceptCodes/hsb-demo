// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Faucet {
    mapping(address => bool) players;

    event AirDropTokens(address _user, uint256 _amount);
}