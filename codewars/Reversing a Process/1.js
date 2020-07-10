function decode(r) {
    let reg = /\d{0,}/
    let arr = r.replace(reg,'').split('')
    let num = Number(r.match(reg))
    let str = ''
    for(let v of arr){
        for(let i=0;i<26;i++){
            if((i)*num%26 === v.charCodeAt()-97){
                str = str+(String.fromCharCode(97+i)+'')
                break
            }
            if(i===25)
                return 'Impossible to decode'
        }
    }
    return str          
}                        
console.log(decode("105860ymmgegeeiwaigsqkcaeguicc"))