## cookie
- name
- value 
- Domain: cookie 生效的域名
- path: /  /a/b  /c  生效的路径
- expires: 过期时间
- httpOnly: cookie 只在 http 传输, js 无法操作(cookie可以有后端的set-cookie响应头设置，也可以由前端的 document.cookie = '' 设置)
- sameSite: lax strict(cookie只在同域生效) none