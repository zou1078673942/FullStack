function getCount(n)
{
  let num = 0;
  let s = 1
  let str = n+""
  function aliquot(str, s){
    if(s == str.length)
        return num
    for(let i=0;i<=str.length-s;i++){
        if (n%Number(str.slice(i,i+s))===0)
            num++
    }
    return aliquot(str,s+1)
  }
  return aliquot(str,s)
}