"use strict";
exports.__esModule = true;
var ObjStack_1 = require("./lib/ObjStack");
var decimalToBinary = function (decNumber) {
    var stack = new ObjStack_1["default"]();
    var number = decNumber;
    var rem; // 余数
    var binaryString = "";
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = number >> 1;
    }
    console.log(stack.pop().toString());
    while (!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
};
var test = 879797978;
console.time('time');
console.log(decimalToBinary(test));
console.timeEnd('time');
