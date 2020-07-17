/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length
    let left = 0,right = nums.length-1,ans = nums.length
    while(left<right){
        let mid = ((right-left) >> 1) + left
        if(target <= nums[mid]){
            console.log(1)
            ans = mid 
            right = mid - 1
        }else{
            console.log(2)
            left = mid + 1
        }
    }
    return ans
};
console.log(searchInsert([1,3,4,6],7))