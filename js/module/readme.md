## common JS
- 导出:module.exports
- 导入:require
- commonJS 一定要代码运行起来才之知道引入了哪些模块
- 可以出现在逻辑分支里面
## es-module
- import/export 不论写在哪里  都会被提前执行
- 在代码静态分析 (代码不用执行) 的时候 就可以分析出引入了哪些模块
- 在react中只能写在最顶部