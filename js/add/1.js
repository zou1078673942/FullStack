const add = function(num1,num2){
    if (arguments.length < 2){
        throw new Error('请传递两个参数')
        return ;
    }
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        throw new Error('参数类型有误');
        return;
    }
    return num1 + num2;
}
console.log(add(1,'b'));