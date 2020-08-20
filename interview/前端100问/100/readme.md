## 第 100 题：（京东）请写出如下代码的打印结果

- **原则**
    - 函数是一等公民
        构造函数  火车头+车厢   **独立运行**
    - 对象属性或方法需要查找
        对象属性 -> 原型对象 -> 原型链 -> Object -> null
    - 构造函数是可以被new的
        new 一个构造函数时，对象是自动返回的
        如果函数有 return 的时候 
        - 如果return 一个简单数据类型  忽略
        - 如果return 一个对象/数组等复杂数据类型 return 大于默认返回
    - 对象属性的设置延申
    - 对象在es6上的新方法


```js
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```