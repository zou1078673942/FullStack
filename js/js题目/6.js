//  sum(1)(2)(3) === 6  // true
function sum (a) {
    let res = 0
    function foo (a) {
        if (!a) return res 
        res += a
        console.log(res,a)
        return foo
    }
    return foo(a)
}
console.log(sum(1)(2)(3)() === 6)