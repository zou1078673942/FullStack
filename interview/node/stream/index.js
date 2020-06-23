// 0x62 是什么?
// 原生js 对二进制不支持
// 0x 表示 16进制; 62 ASCII码
// 
const buf = Buffer.from([0x62, 0x75, 0x66, 0x65, 0x72])
console.log(buf.toString());
// console.log(buf.write('hello world'))

const array = 'hello world'.split('').map(function(v){
    return '0x' + v.charCodeAt(0).toString(16);
});
console.log(array)
// const buf = Buffer.from(array);
// console.log(buf.toString())