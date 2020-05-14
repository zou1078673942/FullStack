const KoaStatic = require('koa-static');
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();
const main = ctx =>{
    ctx.response.type = 'html';  // 设置响应格式 (响应头)
    ctx.response.body = fs.createReadStream('./template.html');  // 在服务器端 打开可读流,  背后有 TCP
}

app.use(KoaStatic('./'));
app.use(main);

app.listen(5500)