## 作用域  
- 全局
- 函数
- 块级作用域( let const)
    可以嵌套

## 语言：作用域有两种模型
- 动态作用域： Perl,Bash 脚本(linux)
- 词法作用域(静态) : js 查找的时候按照代码**书写的顺序**来决定， 不是按照调用时候的位置
    - 闭包  
    有不少开发人员总是搞不清匿名函数和闭包这两个概念，因此经常混用。闭包是指有权访问另一个
    函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数    ----红宝书

    在函数中被 调用   但是它不是函数参数，  也不是 函数局  部变量， 
    相对于当前作用域来说，自由变量？ 引用了外部作用域 (闭包)

    闭包是基于词法作用域书写代码时所产生的自然结果 
