function cyclicShift(arr,n) {
    // let result = [];
    // for  (let i=0;i<arr.length;i++){
    //     result.push(arr[(i-n+arr.length)%arr.length])
    // }
    // return result;

    // let result = [];
    // let arr1 = arr.slice(0,arr.length-n);
    // let arr2 = arr.slice(arr.length-n);
    // result = arr2.concat(arr1);
    // return result;
    return arr.slice(arr.length-n).concat(arr.slice(0,arr.length-n))
}
console.log(cyclicShift([1,2,3,4,5,6,7],1))



// 三次翻转法
function reverse(list,start,end){
    let type = null;
    while(satrt<end){
        type = list[start];
        list[start] = list[end];
        list[end] = type;
        start++;
        end--;
    }
}
function RShift(list,k){
    // 三次翻转法
    // 1. [0, n-k-1]
    // 2. [n-k,n-1]
    // 3. [0,n-1]
    const n = list.length;
    if(k%n === 0) return
    reverse(lis,0,n-k-1)
    reverse(lis,n-k,n-1)
    reverse(lis,0,n-1)
    return list;
}