- setTimeout
- Promise
- 请求
- addevent
- 页面

浏览器内部有很多线程来管理
1. 定时器触发线程
2. http
3. GUI线程


什么是Event-Loop 
**浏览器协调用户交互，渲染，网络等任务**


```js
    setTimeout(() => {
        console.log(1);
    }, 0)
    Promise.resolve(3).then(console.log);
    console.log(2);
```
- 宏任务: setTimeout 整体的一段script
    由宿主环境引起的任务

- 微任务: Prommise.then  MuatationObserver  Process.nextTick
    由 js 本身引起的任务

### 流程
只要 宏任务队列 不为空：
1. 从宏任务队列里取出**一个**执行
2. 从微任务队列里取出**所有**执行，如果在过程中又产生了微任务，则再次**重复**
3. *有可能*进入浏览器的更新渲染阶段 
    - reqAnimationframe 回调
    - 执行 IntersectionObserver 回调‘
    - 重新渲染
    一个宏任务 -> 清空微任务 -> 渲染 -> 一个宏任务(重复)
4. 重复第一步