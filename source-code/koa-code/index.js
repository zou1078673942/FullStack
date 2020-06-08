const MyKoa = require("./lib/application"); 
// 手写Koa  模块化
const app = new MyKoa();

// 源码 
// ctx:  上下文  req res 的结合体

app.use((req,res) => {
    console.log('hello world ')
})

app.listen(3000,(req, res) => {
    console.log('你的应用在3000端口启动')
});