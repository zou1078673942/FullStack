var findRelativeRanks = function (nums) {
    let arr = [];
    arr = nums.slice().sort((a, b) => {
        return b - a;
    })
    for (let i = 0; i < arr.length; i++) {
        let index = nums.indexOf(arr[i])
        if (i == 0) { 
            nums[index] = 'Gold Medal'
        } else if (i == 1) { 
            nums[index] = 'Silver Medal'
        } else if (i == 2) { 
            nums[index] = 'Bronze Medal'
        } else {
            nums[index] = i + 1 + ''
        }
    }
    return nums;
};
console.log(findRelativeRanks([10, 3, 8, 9, 4]))