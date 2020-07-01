function createPhoneNumber(arr){
    // 代码的语义连贯 可读性更好
    return arr.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3')
}
console.log(createPhoneNumber([1,2,3,4,5,3,2,1,3,3]))