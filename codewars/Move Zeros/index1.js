function move_zeros(arrNum, isRight) {
    function addZero(arr,num,isRight) {
        if (isRight == null){
            isRight = true
        }
        if (!isRight){
            for(k=0;k<num;k++){
                arr.unshift(0);
            }
            return arr;
        }else{
            for(k=0;k<num;k++){
                arr.push(0);
            }
            return arr;
        }
    }
    let j = 0;
    for (let i=0;i<arrNum.length;i++){
        if(arrNum[i] === 0){
            arrNum.splice(i,1)
            i--;
            j++;
        }
    } 
    return addZero(arrNum,j,isRight);
}
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]))