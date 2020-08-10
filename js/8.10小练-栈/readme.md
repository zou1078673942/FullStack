## event-loop
```js
async function foo() {
  await bar();
  console.log(1);
}
async function bar() {
 console.log(0)
 Promise.resolve(3).then(console.log)
 return new Promise((resolve, reject) => {
   console.log(2)
   resolve();
 })
}
foo()
```


```js
async function foo() {
  await bar();
  console.log(1);
}
async function bar() {
 console.log(0)
 Promise.resolve(3).then(console.log)
 return new Promise((resolve, reject) => {
   console.log(2)
   setTimeout(() => { resolve() })
 })
}
Promise.resolve(4).then(console.log)
foo()
```

## 简化路径
https://leetcode-cn.com/problems/simplify-path/

## 笔记草稿
题目
薯队长写了一篇笔记草稿，请你帮忙输出最后内容。
1.输入字符包括，"(" , ")" 和 "<"和其他字符。
2.其他字符表示笔记内容。
3.()之间表示注释内容，任何字符都无效。 括号保证成对出现。
4."<"表示退格, 删去前面一个笔记内容字符。括号不受"<"影响 。

输入
Corona(Trump)USA<<<Virus
输出
CoronaVirus

## URL 简化路径
实现一个方法 function resolve(baseUrl: string, moduleId: string): string {}

resolve('http://www.baidu.com', 'a/b/c'); 
简化为-> http://www.baidu.com/a/b/c
resolve('http://www.baidu.com', 'a/../c'); 
简化为-> http://www.baidu.com/c
resolve('http://www.baidu.com/1/2', 'a/.././c'); 
简化为-> http://www.baidu.com/1/2/c