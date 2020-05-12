const https = require('https');
const fs = require('fs');
// res 继承 可读流
https.get('https://movie.douban.com/top250', function (res) {
    console.log(res); // res 继承了可读流    即提供数据的那一方
    const writeStream = fs.createWriteStream('./douban.html');
    res.pipe(writeStream)    // pipe 为中间那个管道
});