"use strict";
// k : v 没有顺序的 stack 入栈是有顺序的
exports.__esModule = true;
var ObjStack = /** @class */ (function () {
    // 构造器
    function ObjStack() {
        this.items = {};
        this.count = 0;
    }
    ObjStack.prototype.push = function (item) {
        // hashMap o(1) 空间可以不连续
        this.items[this.count] = item;
        this.count++;
    };
    ObjStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    ObjStack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    // 返回栈顶元素
    ObjStack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    ObjStack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    ObjStack.prototype.size = function () {
        return this.count;
    };
    ObjStack.prototype.toString = function () {
        console.log(this.items);
        return this.items.toString();
    };
    return ObjStack;
}());
exports["default"] = ObjStack;
