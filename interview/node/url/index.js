//const url = require('url');  // node url 的内置模块

const urlString = 'http://baidu.com:8080/test/h?query=js&a=1#node';
// console.log(url.parse(urlString))
// queryString 有什么方法获得?
function getQueryString(urlStr) {
    let obj = new Object();
    if (urlStr.indexOf('?') != -1){
        let queryStr = urlString.split('?');
        // console.log(str[1]);
        if (urlStr.indexOf('#') != -1){
            queryStr = queryStr[1].split('#')[0];
        }
        var strs = queryStr.split('&');
        for (var i=0; i < strs.length; i++){
            obj[strs[i].split('=')[0]] = strs[i].split('=')[1];
        }
        console.log(obj)
    }
    return obj;
}

getQueryString(urlString);