const func = (str) => {
    let arr = str.split(''), i=1, res = ''
    arr.reduce((a,b) => {
        if(a!==b){
            res = res + a + i
            i=1
        }else{
            i++
        }
        return b
    })
    res = res + arr[arr.length-1] + i
    return res
}
console.log(func('ssscccrrrr'))