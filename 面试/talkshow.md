## this
this 是函数运行时的指针， 指向对象由运行方式决定
1. 作为this的方法调用时， this指向对象本身     
	点调用/new之后的一个方法
2. 作为普通函数调用   this指向全局，严格模式下undefined
	this 指向 window		严格模式:  'user strict'
3. 构造器调用  this指向实例化后的对象
	class 声明 	
4. call apply bind 手动绑定this
	call apply 立即调用，call和apply传参区别
	call 的参数用逗号隔开  apply的参数为一个数组
	bind 未来调用
5. 箭头函数没有自己的this值，箭头函数中所使用的this来自于函数作用域链
	沿着作用域一直查找，找到为止

## 闭包
- 闭包就是能够读取其他函数内部变量的函数，或者子函数在外部调用，子函数
所在的父函数的作用域不会被释放。
	被闭包的作用域得到永生