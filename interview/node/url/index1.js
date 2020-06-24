const urlString = 'http://baidu.com:8080/test/h?query=js&a=1#node';

function getQueryString(urlStr){
        let regex1 = /^[\?]\w{1,100}[=]$/g;
        console.log(urlStr.match(regex1))   
}

getQueryString(urlString);