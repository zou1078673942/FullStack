const express = require('express');
const data = require('./db.json');
// koa 是 express 的孩子
const app = express();
// app.get 是一个请求方法
// get 请求谓语动词
app.get('/',function(req,res){
    // res.end(JSON.stringif(express)) 的简写 
    // Content-Type: application/json; charset=utf-8 这是  res.json 内部所作的
    res.json(data);
})
// 设计一个 url 访问第一首歌
// restful
app.get('/posts/:id',function(req,res){
    // console.log(req.params.id);
    let id = req.params.id;
    let post = data.posts.filter(post => post.id ==id);
    res.json(post.content)
})

app.listen(8081);