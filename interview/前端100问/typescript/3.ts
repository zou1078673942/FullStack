// 面向接口编程是一切高级编程范式的开端  设计模式
// interface 面向对象
interface IUser {
    name: string;
    age: number;
}

const getUserInfo = (user:IUser):string => {
    return `name:${user.name},age:${user.age}`
}