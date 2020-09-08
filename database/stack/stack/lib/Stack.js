"use strict";
exports.__esModule = true;
// 使用 json 数据类型模拟数组
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = {};
        this.count = 0;
    }
    Stack.prototype.push = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        this.count--;
        delete this.items[this.count];
        return this.items;
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    Stack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    Stack.prototype.toString = function () {
        console.log(this.items);
        return this.items.toString();
    };
    return Stack;
}());
exports["default"] = Stack;
