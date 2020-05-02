- DOM document 文档就是网页， js 内存中 ，文档对象模型
    js -> html 转化
    DOM js数据结构tree   appendChild 组成一棵树
    ul> li> textnode

    document.createElement('tag')  创造一个标签节点
    document.createTextment('文本') 创建一个文本节点

    哪怕是文字  都是节点，都是对象

    前端js, html, css,    其中js是王者 可以操控html,css
    这些API 都是 DOM API

- 面向业务编程
    1. 分步
        动态地讲 like button 添加到页面
        linkButton class 方便复用
        既要用 html 来快速完成DOM ,又要能添加事件
        1. 要一个dom节点对象
        2. innerHTML

- js 中的 this 指向
    this 动态决定， 在每个函数里都有this 是个指针
    具体指向谁？？  有他自己的调用方式决定
    1. 作为对象的方法调用， this指向对象本身
    2. 作为事件函数， this指向事件发生的元素 
        bind 可以强行绑定函数内部的this指向 
        call 立即执行

- 封装 class 复用
    constructor 申明属性
    rander() 渲染
    changeLikeText()

    class LikeButton{
        constructor(){

        }
        rander(){

        }
        changeLikeText(){

        }
    }
    -  写在外面？？ 
       万金油  任何类都可以用  独立在外   utll方法
    const createDOMFromString = (domString) => {
            const oDiv = document.createElement('div');   // 创建一个 dom 节点
            oDiv.innerHTML = domString;
            return oDiv;
        }