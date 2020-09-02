"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack");
var ToTwo = function (num) {
    var stack = new Stack_1["default"]();
    var rem; // 余数
    var res = '';
    while (num > 0) {
        rem = num % 2;
        stack.push(rem);
        num = num >> 1;
    }
    while (!stack.isEmpty()) {
        res += stack.pop().toString();
    }
    return res;
};
console.log(ToTwo(5));
