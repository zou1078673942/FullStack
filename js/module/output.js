const add = () => {
    return a + b
};

// 只用到了 add
// 可以优化代码体积
// 可以直接删除 divide
// rollup (打包工具)
add();
