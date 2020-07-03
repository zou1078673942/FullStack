function bub(arr){
    let len = arr.length;
    for(let i=0;i<len+1;i++){
        for(let j=0;j<i+1;j++){
            if(arr[j+1]<arr[j]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                //  console.log(arr)
            }
        }
    }
    return arr;
}
console.log(bub([1,5,8,3,4,1,2,32,3,51]))