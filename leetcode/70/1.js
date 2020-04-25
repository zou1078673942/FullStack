//   假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//   每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//   以下为大型代码注释写法
/**
 * @author zjq 
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} e 
 */
function climbStairs(n){
    if (n >= 40) return new Error('内存溢出')
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climbStairs(n-1) + climbStairs(n-2);
}

console.log(climbStairs(46))