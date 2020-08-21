//  类型定义文件 React FC
interface IUser {
    name: string;
    age: number;
}

type IUserInfoFunc = (user: IUser) => string

const fun:IUserInfoFunc = (user) => {
    return `name:${user.name} age:${user.age }`
}