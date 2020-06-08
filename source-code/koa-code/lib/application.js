const http = require('http');

class MyKoa {
    constructor(){
        //  手写代码 源码分析
        console.log('koa手写')
        this.fn = undefined
    }
    listen(...args){

        let server = http.createServer((req,res) =>{
            res.end('hello wordddld')
        });
        server.listen(...args)
    };
    use(fn){
        this.fn = fn;
    };
}

module.exports = MyKoa