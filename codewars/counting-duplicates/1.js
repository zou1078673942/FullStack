function duplicateCount(text){
    let arr = text.split('');
    let res = [];
    let same = [];
    let num = 0;
    arr.forEach(e => {
        if(res.indexOf(e.toLowerCase()) == -1)
            res.push(e.toLowerCase())
        else{
            if(same.indexOf(e.toLowerCase()) == -1){
                same.push(e.toLowerCase())
                num++;
            }
        }
    });
    return num;
}
console.log(duplicateCount('faaa'))
console.log(Number('foo'))