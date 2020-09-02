import Stack from './lib/Stack'

const stack = new Stack()

stack.push('一')
stack.push('二')
stack.push('三')

stack.pop()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.toString())