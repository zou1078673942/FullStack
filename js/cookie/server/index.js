const http = require('http')
const fs = require('fs')
let count = 10000
let sessiontable = [{
    userName: 'liming',
    useID: 1001,
    login: true,
    expire: 2021,
    id: 01
}]
// 用户登录状态保持
// 第一次登录完  后端写入一个cookie: userName = liming,userID = 1001
// cookie: sessionId: 01
// cookie 每次都随着 http 请求自动发送
// 后端每次取出 cookie 信息 if(login) {登录状态有效}
http.createServer((req, res) => {
    function islogin() {
        if (req.headers['cookie']) {
            let cookie = req.headers['cookie']
            console.log(cookie, '222')
            console.log(cookie)
            let cookies = cookie.split(';')
            let sessionCookie = cookies.find(cookie => cookie.includes('session'))
            let [name, sessionId] = sessionCookie.split('=')
            if (sessiontable.find(item => item.id === Number(sessionId))) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    switch (req.url) {
        case '/transfer':
            if (islogin()){
                count -= 100
                res.end('ok')
            }else{
                res.end('un auth')
            }
            break;
        case '/count':
            islogin()?res.end(count + ''):res.end('un auth')
            break;
        case '/islogin':
            islogin()?res.end('login'):res.end('not login')
            break;
        default:
            const html = fs.readFileSync('./index.html', 'utf-8')
            res.setHeader('set-cookie', 'session=1')
            res.end(html)
            break;
    }
})
    .listen(9090, () => {
        console.log(9090)
    })
/**
 * 
防止CSRF攻击
1. 
    sameSite: lax  localhost的某些get请求在zhaomeng.com 发出也能带cookie
    samesite：strict   localhost 的请求只有在localhost 发出才会带cookie
    sameSite： none localhost的get请求不管在什么域都会携带cookie
2. csrf_token:
   用户登录完  服务端 给你一个token  abcd
   前端存起来
   之后的请求都要携带这个token 
   这样对于 zhaomeng.com  他发出去是没有这个token   

3. 浏览器 会给每个请求一个reffer字段  表明这个请求来源
    服务端检测来源
 */