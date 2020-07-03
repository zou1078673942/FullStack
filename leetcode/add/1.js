function add(num1, num2) {
    if(num1 === 0) return num2
    if(num2 === 0) return num1
    let newA = num1 ^ num2;
    let newB = (num1 & num2) << 1
    console.log(num1,num2)
    return add(newA,newB)
}
console.log(add(5,44))