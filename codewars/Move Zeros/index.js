// 错误的
function move_zeros(arrNum, isRight){
    let len = arrNum.length
    function swap1 (arr, i, j){
        [arr[i], arr[len-j]] = [arr[len-j], arr[i]];
    }
    function swap2(arr, i, j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    let swap = isRight?swap1:swap2;
    for (let i=0;i<arrNum.length;i++){
        let j = 0;
        if(arrNum[i] === 0){
            swap(arrNum,i,j)
            j++;
        }
    }
    return arrNum;
}
console.log(move_zeros([1,2,3,0],false))