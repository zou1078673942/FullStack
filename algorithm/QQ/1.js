const nums = '631758924';
let c = nums[1];
let arr = [];
arr.push(nums[0]);
console.log(typeof nums); // typeof 运算符  可以得到常量的类型
nums = nums.substring(2);  //substring  从字符串的哪一个下标开始
nums += c;
console.log(nums,arr);