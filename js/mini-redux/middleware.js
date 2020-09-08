const _ = require('lodash')

function fn1 (str) {
    return str + 'def'
}
function fn2 (str) {
    return str.toUpperCase()
}
function fn3 (str) {
    return str + 'gh'
}

const fn = myFlow([fn1,fn2,fn3])

console.log(fn('abc'))

function myFlow (fns) {
    return (str) => {
        fns[0] = fns[0](str)
        return fns.reduce((arg,fn) => fn(arg))
    }
}