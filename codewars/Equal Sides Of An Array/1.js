function findEvenIndex(arr)
{
  for(let i=1;i<=arr.length;i++){
    console.log(arr.slice(0,i),arr.slice(i-1))
    if (arr.slice(0,i).reduce((a,b=0) => a+b) === arr.slice(i-1).reduce((a,b=0) => a+b))
      return i-1
  }
  return -1
}
console.log(findEvenIndex([10,-80,10,10,15,35,20]))