// 长方形面积的函数
/**
 * 
 * @param {*} w 
 * @param {*} h 
 */
function area(w,h){
    // console.log(arguments);
    if (arguments.length < 2){
        throw new Error('请传递w,h两个参数')
        return ;
    }
    if(typeof w != 'number' || typeof h != 'number'){
        throw new Error('参数类型有误');
        return;
    }
    // console.log(w,h);
    return w*h;
}
console.log(area(1.3,4.5555));

// var area = function(w,h){
// }

// let getArea = (w, h) => w*h;
