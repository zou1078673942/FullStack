//  zip(['fred', 'barney'], [30, 40], [true, false]);
//  => [['fred', 30, true], ['barney', 40, false]]
function zip(arr1,arr2,arr3) {
    console.log(arguments[1])
    // let res = []
    // console.log(Array.from(arguments))
    // for (let i=0;i<arr1.length;i++){
    //     res.push([arr1[i],arr2[i],arr3[i]])
    // }
    // return res
}
console.log(zip(['fred', 'barney'], [30, 40], [true, false]))

const newZip = (...args) => {
    let res = []
    for (let i=0;i<args[0].length;i++){
        let arr = []
        for(let j=0;j<args.length;j++){
            arr.push(args[j][i])
        }
        res.push(arr)
    }
    return res 
}

console.log(newZip(['fred', 'barney'], [30, 40], [true, false],[1,2]))