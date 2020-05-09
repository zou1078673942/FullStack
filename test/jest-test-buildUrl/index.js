const { add, minus, buildUrl} = require('./math');
// let result = add(3, 7);
// let expected = 10;
// if (result !== expected){
//     throw new Error('3 + 7 = 10')
// }
// let result1 = minus(3, 7);
// let expected1 = -4;
// if (result1 !== expected1){
//     throw new Error('3 - 7 = -4')
// }
function expect(result){
    return{
        toBe:function(value){
            if (result !== value){
                throw new Error('预期与现实不一样');
            }
        }
    }
}
function test(desc,fn){
    // fn有没有报错？
    // try{} catch(){}
    // 检测报错 可以保证出错的代码不影响其他的代码
    try {
        fn();
        console.log(`${desc}通过`)
    }catch(err){
        console.log(`${desc}不通过`)
    }
}
// 提示很欠缺 如果两个方法都错了无法分辨
// expect(minus(3,7)).toBe(-4);
// expect(add(3,7)).toBe(10);
test('测试加法',() =>{
    expect(add(3,7)).toBe(10);
})
test('测试减法',() =>{
    expect(minus(3,7)).toBe(-4);
})