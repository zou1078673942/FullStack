function hongbao(total,num){
    let arr = [];
    let restAmount = total ;
    let restNum = num ;
    for(i=0;i<num-1;i++){
        let amount = total/num;
        arr.push(amount)
        restAmount -= amount;   
    }
    arr.push(restAmount);
    return arr;
}
console.log(hongbao(5,40));