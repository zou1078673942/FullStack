## 有赞一面凉经

- css选择器有哪些

- 选择器的优先级
    - 1,0,0,0   style=""
      0,1,0,0   id
      0,0,1,0   class
      0,0,0,1   div h2 input
      0,0,0,0   * > + ~ 等  
      - 选择器优先级会相加  但是不会进位
      - *:选中所有
        >:选中子元素    ul > li {} 选中ul下在子元素li  而对于ul下的孙元素li 无法选中
        +:相邻选择器    li + li {color: red}   可以选中与li相邻的li标签 <li>1</li><li>2</li>  会选中出了第一个之外的
        ~:

- flex布局

- position 有哪些属性

- absolute relative flex 的区别
？  - relative 相对自身  不脱离文档流  相对于包含块
？  - 查 mdn

- es6新特性, es5 es6有什么不同

- let const var 的区别
    - let const 有块级作用域 var 没有 let 可变 const 不可变
？    - var 变量提升         console.log(a);   var a=1;
？    - let const 暂时性死区                          

- 箭头函数和普通函数区别
    - this
    - 普通函数的this没有被确定 可以new

- js异步处理方式

- Promise有什么静态方法
    - Promise.all
        同时调用多个异步任务  Promise.all([promise1,promise2,promise3]).then().catch()
        所有的promise都成功  Promise.all 才会成功
    - Promise.race
        第一个完成的 promise 作为最终的结果 无论成功或者失败 Promise.race([promise1,promise2,promise3]).then().catch()
    - Promise.allSettled
        运行每一个 promise 并且将请求的结果作为数组返回

- js数据类型

- 什么是闭包, 闭包可以用来做什么

- js有哪些类型检查的方法

- instance of 在原型链上查找的方式
    - 判断构造函数上面存不存在一个 Symbol.hasInstance 的方法,如果存在这个
    方法, 则取这个方法的返回值
    - 判断左边对象的原型链上是否存在右边这个构造函数的 .prototype

- call,bind,apply的区别

- 浏览器事件模型  一个按钮点击完之后发生了什么

- 如何对多个事件进行处理
    - 有1w个li 如何给这些节点绑上事件？？ 事件代理
        冒泡 绑定在ul上  event.target 表示冒泡中最底层的     event.currentTarget 则写死了 表示这个事件绑定的节点
    - 全局事件(定时器)一定要清理