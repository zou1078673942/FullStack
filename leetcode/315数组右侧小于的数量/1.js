var countSmaller = function(nums) {
    let counts = [],num = 0
    for(let i=0;i<nums.length;i++){
        num = 0
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j])
                num++        
        }
        counts.push(num)
    }
    return counts
};
countSmaller([5,2,6,1])