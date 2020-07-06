function myAdd (n1,n2){
    let arr1 = (n1+"").split('').map(Number)
    let arr2 = ((n2+"").split('')).map(Number)
    let res = []
    if(arr1.length<arr2.length){
        let temp = arr1
        arr1 = arr2
        arr2 = temp
    }   
    let num = 0
    let carry = false
    for (let i=0;i<arr1.length;i++){
        if(i>=arr2.length)
            num = arr1[arr1.length-i-1]+0+carry
        else
            num = arr1[arr1.length-i-1]+arr2[arr2.length-i-1]+carry
        num>=10?carry=true:carry=false
        carry?res.unshift(num-10):res.unshift(num)
        console.log(num)
    }
    return res.join('')
}
console.log(myAdd(12,1111292),'-------------')