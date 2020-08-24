const Koa = require('koa')
const KoaViews = require('koa-views')
const KoaRouter = require('koa-router')
const path = require('path')

const app = new Koa()

app.use(KoaViews(path.resolve(__dirname,'./views'),{
    extension:'ejs'
}))

const router = KoaRouter()
router.get('/',async ctx => {
    const { xss } = ctx.query
    await ctx.render('index',{
        username:'lihua'
    })
})

app
.use(router.routes())
.use(router.allowedMethods())

app.listen(9090,() => {
    console.log(9090)
})