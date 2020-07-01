## 函数式编程
- 纯函数： 提倡写一个函数风格
    无副作用
    相同输入 必定相同输出
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
- 深浅拷贝各有优缺点 鱼和熊掌不可兼得

- 所有操作都不可变
- 结构共享！ 
    - 
