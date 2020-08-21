 
 const getUserInfo = (user:{name:string,age:number}):string =>{
    return `name:${user.name},age:${user.age}`
}
getUserInfo({name:'17',age:18})
// 潜在 bug
// java c++ 程序员 => typescript
// getUserInfo()
// getUserInfo({name:'17'})
// getUserInfo({name:'17',height:180})