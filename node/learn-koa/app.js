const http = require('http');

http
    .createServer((req,res) => {
        // res.end('hello world')
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('哈哈哈哈哈**')
    }else if(req.url === 'about'){
        res.end('About');
    }
})
.listen(1314)