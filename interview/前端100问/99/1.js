const foo = (num) => {
    num = num+'';
    let res = '',len = num.length
    const help = (i=0) => {
        res = num.slice(i,i+1) + res
        i < len && help(i+1)
    }
    help()
    return res
}
console.log(foo(1234))