const http = require('http');
const fs = require('fs')
const server = http.createServer(function(req, res){
    if (req.url==='/'){
        const html = fs.readFileSync('./index.html','utf8');       // 同步 ，readFileSync 结束之前不会继续运行    readFile 为异步
        res.end(html);
    }else if (req.url === '/getPosts'){
        let posts = [
            {title:'js', star:1000},
            {title:"php", star:2000}
        ]
        res.end(JSON.stringify(posts))
    }
})
server.listen(8080,function(){
    console.log('server is runing 8080');
})