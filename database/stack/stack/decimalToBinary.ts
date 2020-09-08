import Stack from './lib/ObjStack'

const decimalToBinary = function (decNumber: number) : string {
    const stack = new Stack();
    let number = decNumber;
    let rem ;// 余数
    let binaryString = "";
    while(number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = number >> 1
    }
    console.log(stack.pop().toString())
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString
}
const test = 879797978

console.time('time')
console.log(decimalToBinary(test))
console.timeEnd('time')