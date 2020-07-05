function josephus(items,k){
    //your code here
    let res = [];
    let count = 0
    while(items.length>0){
        count = (count+k-1)%items.length
        console.log(count)
        res.push(items[count])
        items = items.slice(0,count).concat(items.slice(count+1))
    }
    return res
  }
  console.log(josephus(["C","o","d","e","W","a","r","s"],4))
  document.querySelectorAll