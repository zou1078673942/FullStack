import Stack from './lib/Stack'

const ToTwo = (num:number):String => {
    const stack = new Stack()
    let n = num
    let rem:Number
    let res:String
    while(n > 0){
        rem = Math.floor(n % 2)
        stack.push(rem)
        n = n >> 1
    }
    while(!stack.isEmpty()){
        res += stack.pop().toString()
    }
    return res
}

console.log(ToTwo(5))