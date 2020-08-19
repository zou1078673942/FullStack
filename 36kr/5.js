var a = {n:1}
var b = a 
a.x = a = {n:2}
console.log(a.x,'a')
console.log(a,b)
console.log(b.x,'b')