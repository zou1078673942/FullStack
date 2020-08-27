function foo (l,r) {
    let res = Math.floor(((r-l+1)/3))
    let a = (r-l+1)%3
    console.log(res,a)
    console.log(a < (l%3)?res-1:res)
}
foo(3,5)