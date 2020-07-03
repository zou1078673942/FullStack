const distributeEvenly = (array) => {
    let ans = [];
    let s = [];
    for (let i = 0; i < array.length; i++){
        if(s.indexOf(array[i]) == -1){
            s.push(array[i]);
        }
    }
    do{
        let arr = [];
        for (let i = 0; i < s.length;i++){
            if(array.length !=0 && array.indexOf(s[i]) != -1){
                arr.push(s[i]);
                let ar = [];
                for(let j=0; j<array.length; j++){
                    if(j != array.indexOf(s[i])){
                        ar.push(array[j])
                    }
                }
                array = ar;
            }
        }
        for (let i=0;i < arr.length;i++){
            ans.push(arr[i])
        }
    }while(array.length > 0)
    return ans;
};
console.log(distributeEvenly(['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four']))