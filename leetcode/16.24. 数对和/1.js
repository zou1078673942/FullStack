var pairSums = function(nums, target) {
    nums.sort((a,b) => a-b)
    let start = 0,end = nums.length-1,res = []
    while(start < end){
        if(nums[start] + nums[end] === target){
            res.push([nums[start],nums[end]])
            start++
            end--
        }
        if(nums[start] + nums[end] > target){
            end--
        }
        if(nums[start] + nums[end] < target){
            start++
        }
    }
    return res
};