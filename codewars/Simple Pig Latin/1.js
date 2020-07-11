function pigIt(str){
    let reg = /(\w)(\w{0,})\s/
    console.log(reg.$1,reg.$2)
    let res = str.replace(reg,reg.$2+reg.$1+'ay ')
    return res
  }
console.log(pigIt('Pig latin is cool'))