function removeNumberGame(n, d) {
    let arr = []
    let a = n.length + d;
    function del(n,d,count){
        if(n.length+d != a)
            n = "0" + n;
        let len = n.length;
        if(len == 1 || d == 1)
            return 0
        for(let i=0;i<len;i++){
            let num = n.slice(0,i)+n.slice(i+1)
            console.log(num,count,i)
            num *= 1;
            if( num%d == 0 )
                del(""+num,d-1,count+1)
            if(i==len && num%d != 0){
                arr.push(count)
            }
        }
    }
    del(n,d,0)
    console.log(arr)
}
console.log(removeNumberGame("102045",4))