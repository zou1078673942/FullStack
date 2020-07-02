/**
 * 1. 可读性  良好的代码风格
 * 
 */
let arr = [1,2,3,4];
let sum = arr.reduce(function(pre,cur,index,arr){
    console.log(pre,cur,index)
    return pre + cur;
},13);
console.log(sum);