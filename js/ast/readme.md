ast ?  abstract syntax tree 抽象语法树

- url 输入  打开页面时  发生了什么
    WEB应用 多进程架构
    打开chrome 打开页面的时候
    启动4个进程  应用进程(pid 计算及资源调用的最小单元) 浏览器运行  
    - tab  负责一次页面渲染 
        - 一个主进程 
        - 两个子进程 
            - Network Service : http 请求进程 
            - GPU 计算 ： 高速 css 绘制,负责渲染 
                GPU 加速？？
                chrome 为了让页面加载更快，使用GPU 来绘制页面， 这也是chrome 战胜IE的地方
    html 就是一个文本 text/html
    浏览器在背后 将 文本 -> dom对象 存储到内存里面 
    chrome 使用 v8 引擎
    BOM Browser Object Model  浏览器对象模型
    DOM Document Object Model   文档对象模型
    JSON  对象字面量

    text/html 要将 html 文本显示在浏览器上 需要转变为 js.document
    html -> JSON  
