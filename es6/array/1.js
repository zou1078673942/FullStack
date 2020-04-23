const ages = [32,15,19,12];
//  es6 新写法  array.filter(() => {})    箭头左边为参数 右边为函数 若函数之后一句 则{}可以省略
const adultArr = ages.filter(age => age >= 18);
console.log(adultArr);
//  some : 如果数组中含有一个则返回为 true
const adultPresent = ages.some(age => age >= 18)   
console.log(adultPresent);
//  every : 数组中所有元素都满足
const allOldEnough = ages.every(age => age >= 18)
console.log(allOldEnough)