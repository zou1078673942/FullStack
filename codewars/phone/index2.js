function createPhoneNumber(arr){
    // 模板字符串
    let num = arr.join('');
    return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`
}
console.log(createPhoneNumber([1,2,3,4,5,3,2,1,3,3]))