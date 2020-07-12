function pigIt(str){
    return str.replace(/\b(\w)(\w{0,})\b/g,'$2'+'$1'+'ay')
}
console.log(pigIt('Pig latin is cool !'))