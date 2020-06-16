// ， 使命是提供对跨域请求抽象封装
// 服务于ranking
// 服务于  Recommend.js 

// url 不一样 
// params  
// es6 模块化
import originJsonp from "jsonp";

let jsonp = (url, data, option) => {
  return new Promise((resolve, reject) => {
    originJsonp(buildUrl(url, data), option, (err, data) => {
      
    })
  });
}

export default jsonp;
