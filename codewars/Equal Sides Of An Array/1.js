function findEvenIndex(arr)
{
  return arr.findIndex((i,a)=> a.slice(0,i).reduce((p,c)=>p+c,0)==a.slice(i+1).reduce((p,c)=>p+c,0));
}
console.log(findEvenIndex[1,2])