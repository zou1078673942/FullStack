//  轻量级的 web 开发框架    js node 占50%
const Koa = require('koa'); // 请上Koa
const fs = require('fs');  
const app = new Koa();
//  启动一个服务   函数封装一个服务
const main = ctx => {
    // 提供给访问者用  需要刷新页面
    console.log(ctx,'------');
    // ctx.response.body = 'Hello World';
    // response 响应用户
    ctx.response.type = 'html'; 
    
    const html = fs.readFileSync('./template.html', 'utf-8');
    console.log(html);
    ctx.response.body = html;
}
// const func = ctx => {
//     console.log('func');
//     ctx.response.body = 'hi';  // 返回！ 后面的use不执行
// }
// app.use(func);  
app.use(main); // 启动一个服务，给访问者 request用
app.listen(3000);