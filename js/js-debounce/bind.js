// 正则表达式  
// g: glob全局
// \n: new line
let whiteSpace = /\n/g
let str = `
123
`
let str1 = `111`
function test(reg, str){
    return reg.test(str);
}
console.log(test(whiteSpace,str));
let hasWhiteSpace = test.bind(null, whiteSpace);
console.log(hasWhiteSpace(str1))
let hasTabSpace = test.bind(null,/t/g);
let hasNumber = test.bind(null,/[0-9]/g);