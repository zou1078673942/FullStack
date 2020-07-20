var twoSum = function(numbers, target) {
    let len = numbers.length,i=0,j=len-1
    while(i<j){
        if(numbers[i]+numbers[j] === target){
            return [i+1,j+1]
        }
        if(numbers[i]+numbers[j] > target){
            j--
        }
        if(numbers[i]+numbers[j]<target){
            i++
        }
    }
};