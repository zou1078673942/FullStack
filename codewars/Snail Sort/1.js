snail = function(array) {
    let arr = array.flat(),
        len = array.length-1,
        n = 0,res = []
    function circle(n){
        console.log(arr)
        res = res.concat(arr.slice(n*len+n,n*len+len-n))
        for(let i=0;i<=len-n;i++){
            console.log('1')
            res.push(arr[len*i+n*len+len-n])
        }
        for(let i=0;i<=len-n;i++){
            console.log('2')
            res.push(arr[(len-n)**2]-i)
        }
        for(let i=0;i<=len-n;i++){
            console.log('3',res)
            res.push(arr[(len-n)**2-len+n-i*len])
        }
        if(len%2 === 0){
            console.log('====')
            if(n == len-2)
                return res.push(arr[arr.length/2])
        }
        if(len%2 !== 0){
            console.log('----')
            if(n == len-1)
                return res
        }
        return circle(n+1)
    }
    return circle(n)
}
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))