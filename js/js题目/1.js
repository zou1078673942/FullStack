// function * foo () {
//     yield 0
//     yield 1
//     yield 0
//     yield 1
// }
// let fun = foo()
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)
// console.log(fun.next().value)
const fn1 = (() => {
    let count = 0
    return () => {
        count++
        return count%2===0?1:0
    }
})()
console.log(fn1())
console.log(fn1())
console.log(fn1())
console.log(fn1())