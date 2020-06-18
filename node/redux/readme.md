## 状态
```js
let isLogin = false;
// login-component 
isLogin = true;
// logout-component
isLogin = false;
```


## redux
- 设计了一套修改 state 的流程(单向)
    UI -> ACTION -> REDUCER -> STORE -> UI
    在我们修改变量的过程中加入一些环节 
    状态的修改更 可控(借助函数编程的特点)

## 