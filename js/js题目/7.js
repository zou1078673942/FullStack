// 手写柯里化
function sum(a, b, c) {
    return a + b + c
}

function curry(fun) {
    const len = fun.length
    // 无论分几次传参数  接受到之后都会存到args中
    let args = []
    function help(...arg) {
        args = args.concat(arg)
        console.log(args)
        if (args.length >= len) {
            // args = []
            let res = fun(...args)
            args = []
            return res
        } else {
            return help;
        }
    }
    return help
}
const currySum = curry(sum)
console.log(currySum(1,3)(4))
console.log(currySum(1)(3,4))
console.log(currySum(1)(3)(4))