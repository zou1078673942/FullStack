## 函数式编程
- 浅拷贝和深拷贝各有优缺点
- 可变
    ```js
    let obj = {};
    let obj1 = obj;
    obj1.name = 123;
    ```
- 不可变  redux中的state要求是不可变的
    ```js
    let newObj = {}
    let obj3 = {...newObj}
    obj3.name = 123;  // 无副作用
    ```
## immutable 
- api简洁 所有操作都是不可变
- 结构共享
