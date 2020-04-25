function f(n){
    if (n == 1) return 1;    //推出条件
    return f(n-1) + 1        //递归公式
}
 console.log(f(100000))