Tencent 腾讯 
使用语言排序
c++, js, go, java, python

基石？ 
连接  即时通信  TCP/IP 协议
- koa 是 node web 开发框架
    koa 加速了 node web 开发 一个web服务就是一个 web app
    koa 在3000端口提供了http协议访问服务, 
    https://127.0.0.1:3000 

    http.creatServer()
    http node的内置模块  createServer 启动服务
    Koa 封装了他们

-  ctx ?? context 上下文环境(request response)
    http 协议 诞生于 1991, 用于传输学术论文的。
    基于  请求(ctx.request)  响应(ctx.response)的模式, 在网络间传输HTML
    超文本内容  HTTP/0.9 1991年

- HTTP(web server 应用程协议) 基于TCP (Tracnsport Control Protocol) 协议
    TCP 用户 移动或者电信 运营商 动态IP, 网站 阿里云(IP)

        - 网络七层协议 
            应用层  HTTP     TCP连接 三次握手
            表示层
            会话层
            传输层  TCP
            网络层
            数据链路层
            物理层
        - 建立连接后 会发送一个GET 请求行(request methob GET url /)的信息
            GET / template.html
        - 服务器接受到请求信息后  读取对应的html'文件， 并将数据以asc 返回给用户浏览器
        - 断开连接