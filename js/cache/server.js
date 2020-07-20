const express = require('express')

const app = express()
// get 路由
app.get('/big.js', (req, res) => {
    console.log('here')
    const fs = require('fs')
    const md5 = require('md5')
    const jsContent = fs.readFileSync('./big.js','utf-8')
    // 一堆 头字段
    // content-type

    // 强缓存： 200 (from memory/disk cache, 请求不会到达服务器)
    res.setHeader('Cache-Control','max-age=20')

    // 协商缓存: 请求会到达服务器 (浏览器决定不了,由浏览器和服务器协商)
    // 20s之后，请求 (携带一个if-none-match的字段) 到达服务器
    // if-none-match：浏览器发现上一次请求服务器有  Etag 设置，浏览器会自动发送一个
    // Etag 生成: md5
    // if-modified-since：文件修改了文件的最后修改也会发生改变
    // 服务器 对比前后两次文件有没有变化  从时间角度考虑  有缺陷
    const Etag = md5(jsContent)
    const oldEtag = req.headers['if-none-match']
    if(Etag === oldEtag){
        // 文件没有变化
        // 从缓存里面读取 304(not modified)
        res.sendStatus(304).end('')
        return 
    }
    res.setHeader('ETag',Etag)
    res.end(jsContent)
})
app.listen(9090,() => {
    console.log(9090)
})