const findMultiples = (integer, limit) =>{
    let arr = []
    for(let i=1;i<=limit/integer;i++)
        arr.push(i*integer)
    return arr
}
console.log(findMultiples(5, 25))