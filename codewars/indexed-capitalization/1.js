function capitalize(s,arr){
    function upper(str,i){
        s = str.slice(0,i).concat((str.slice(i,i+1).toUpperCase()).concat(str.slice(i+1)))
    }
    for(let i=0;i<arr.length;i++)
        upper(s,arr[i])
    return s;
  };
  console.log(capitalize("abcdef",[1,2,5]))