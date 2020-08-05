const strToInt = (str) => {
    let reg = /^(\s+)?((\+?|-?)\d+)/
    console.log(str.match(reg))
    let num = str.match(reg)?Number(str.match(reg)[2]):0
    if (num > 2 ** 31 -1)  num = 2**31-1
    if (num < -(2 ** 31))  num = -(2 ** 31)
    return num
}
strToInt("+-2")