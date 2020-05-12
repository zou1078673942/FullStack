const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
    if(ctx.request.url === '/FA7276B0-8C21-49B2-A6D5-72F3EE31C2E8_4_5005_c.jpeg'){
        ctx.response.type = 'image';
        ctx.response.body = fs.createReadStream('./FA7276B0-8C21-49B2-A6D5-72F3EE31C2E8_4_5005_c.jpeg')
    }else if (ctx.request.url === '/common.css') {
        ctx.response.type = 'css';
        ctx.response.body = fs.createReadStream('./common.css');
    }else{
        ctx.response.type = 'html';  // 设置响应格式 (响应头)
        ctx.response.body = fs.createReadStream('./template.html');  // 在服务器端 打开可读流,  背后有 TCP
    }

}

// const main = ctx => {
//     if (ctx.request.path == '/') {
//       ctx.response.type = 'html';
//       ctx.response.body = '<a href="/">Index Page</a>';
//     } else {
//       ctx.response.body = 'Hello World';
//     }
//   }
  
app.use(main);

app.listen(8080)