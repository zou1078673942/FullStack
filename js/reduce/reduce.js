Array.prototype.myReduce = function(reduceCallback, initialValue){
    let arr = this;
    if(!Array.isArray(arr) || !arr.length || 
    typeof reduceCallback !== 'function'){
        return [];
    }else{
        let hasInitialValue = initialValue !== undefined;
        let value = hasInitialValue?initialValue:arr[0];
        for(let i = hasInitialValue? 0: 1;i<arr.length;i++){
            value = reduceCallback(value,arr[i],i,arr);
        }
        return value;
    }
}
console.log([1,2,3,4].myReduce((pre,cur,index,arr)=>{
    return pre + cur 
},5))