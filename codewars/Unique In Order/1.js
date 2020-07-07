var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    // iterable = iterable.toString()
    let arr = []
    switch(typeof iterable){
        case "object": arr = iterable;break;
        case "string": arr = iterable.split('');break;
    }
    if(arr.length === 0)
        return []
    let res = [arr[0]]
    for(let i=1;i<arr.length;i++){
        if(arr[i-1] !== arr[i])
            res.push(arr[i])
    }
    return res
  }