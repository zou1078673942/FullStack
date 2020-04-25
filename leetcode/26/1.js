/**
 * @author zjq
 * @date 2020-4-15
 * @function 删除数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1)
        return nums.length;
    else
    {let len = 0;
    for(let i=0;i<=nums.length ;i++)
    {
        if(nums[i] !== nums[len]){
            nums[++len] = nums[i];
        }
        // console.log(nums);
    }
    return len;}
};
console.log(removeDuplicates([1,1,2]));