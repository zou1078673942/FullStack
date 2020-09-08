interface StackObj {
    [index:number]:any
}
// 使用 json 数据类型模拟数组
export default class Stack {
    
    private items: StackObj
    private count: number
    constructor(){
        this.items = {}
        this.count = 0
    }
    
    push(item:any){
        this.items[this.count] = item
        this.count ++ 
    }
    pop(){
        if (this.isEmpty()) return undefined
        this.count --
        delete this.items[this.count]
        return this.items
    }
    peek(){
        if (this.isEmpty()) return undefined
        return this.items[this.count-1]
    }
    size():Number{
        return this.count
    }
    isEmpty():Boolean{
        return this.count === 0
    }
    clear() {
        this.items = {}
        this.count = 0
    }
    toString():String{
        console.log(this.items)
        return this.items.toString()
    }
}