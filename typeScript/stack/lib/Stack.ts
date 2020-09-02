export default class Stack {
    private items:Array<any>
    constructor() {
        this.items = []
    }
    push(item:any){
        return this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size():Number{
        return this.items.length
    }
    isEmpty():Boolean{
        return this.items.length === 0
    }
    clear() {
        this.items = []
    }
    toString():String{
        return this.items.toString()
    }
}