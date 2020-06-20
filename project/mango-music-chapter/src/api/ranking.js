//  模块化  排行榜有多个接口  用 export function 
//  一个文件 干一个事情
// import jsonp from './jsonp'  // 真正的请求 来自 腾讯    跨域请求解决方案
import {URL, PARAM, OPTION} from './config'
import jsonp from './jsonp';
//  获取排行榜列表的数据
export function getRankingList(){
    const data = Object.assign({}, PARAM, {
        g_tk:5381,
        uin:0,
        plaform:'h5',
        needNewCode:1,
        _: new Date().getTime()
    });
    console.log(data,'/////////////////////////');
    return jsonp(URL.rankingList, data, OPTION)
}

export function getRankingInfo(){

}