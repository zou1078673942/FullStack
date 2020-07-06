const promise1 = Promise.resolve(1)
const promise2 = Promise.reject(2)
const promise3 = Promise.reject(2)
function myPromiseAll(arr){
    let i = 0
    let bol = true
    function resolve(bol){
        i ++ 
        bol = bol && true
        console.log(i,bol)
    }
    function reject(bol){
        console.log(i,bol)
        bol = bol&&false
    }
    for(let pro of arr){
        pro
        .then(resolve,reject)
        // console.log(bol)
    }
    return bol;

}
console.log(myPromiseAll([promise1,promise2,promise3]))