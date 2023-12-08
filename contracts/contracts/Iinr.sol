// SPDX-License-Identifier: MIT
interface IINR {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address receiver, uint amount) external returns(bool);
}