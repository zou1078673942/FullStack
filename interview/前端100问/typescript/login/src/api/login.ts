import { LoginEntity } from '../model/login'

export const isValidLogin = (loginInfo:LoginEntity):Promise<boolean> => {
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res(loginInfo.login === 'admin' && loginInfo.password === 'test')
        },500)
    })
}