//   散列 / 哈希
const md5 = require('md5')
// 同样的输入同样的输出
// 如果两次 md5 结果一样 => 两次未加密的内容也一样
// => 两次md5(big.js) 对比一下
// 协商: 是否缓存新的内容
// 服务器判断 是否可以缓存，要先知道内容是否发生变化
console.log(md5('abc'))
console.log(md5('159'))