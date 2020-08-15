import { Controller } from 'egg'

class LoginController extends Controller {
    // 面向对象
    public async index() {
        // JSON
        this.ctx.body = JSON.stringify({
            msg: '登录成功'
        })
    }
}

export default LoginController