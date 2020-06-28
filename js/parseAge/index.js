function parseAge(str){
    if(typeof(str) != 'string'){
        console.log('type error!')
    }else{
        let num = Number(str);
        console.log(num);
        if(num == NaN){
            console.log('type error!')
        }else{
            if(num >= 0){
                console.log(num);
            }else{
                console.log('Age must be greater than 0!')
            }
        }
    }
}
parseAge('false')