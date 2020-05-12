const fs = require('fs');

function copy(sourceUrl, destUrl){
    // fs.readFile(sourceUrl,(err,info) =>{
    //     if(!err){
    //         fs.writeFile(destUrl, info,(err)=>{
    //             if(!err){
    //                 console.log('拷贝完毕');
    //             }
    //         })
    //     }
    // })
    // 可读流  可写流  转换流
    // 前端：  访问baidu.com -> 浏览器读取html,css,js -> 我看到
    //         小王访问baidu.com -> 浏览器读取html,css,js -> 小王看到
    // 在各自电脑运行
    // 浏览器执行 js , 浏览器会申请内存   在各自电脑上运行 天然就是分布式 
    // 
    // 后端： 访问baidu.com 一台服务器   需要处理 我  小王  小李  等等...的访问
    // 内存过多  所有访问者都会卡 
    const readStream = fs.createReadStream(sourceUrl); 
    const writeStream = fs.createWriteStream(destUrl); 
    readStream.pipe(writeStream)
}
copy('./readme.md','./copy.md')