import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app; //  controller  router
  // controller  url -> controller -> render view
  // 路由列表  nginx(服务器代理)    http://www.baidu.com -> ip -> nginx (负载均衡 分配到内网的哪台机器)
  // 后端路由  '/'  MVC Controller  index.html  #root  负责启动首页 和 /api
  // 前端路由  react  build  js  挂载  由单页应用路由来负责 SPA  更快  useEffect -> reducer -> action -> api -> 后台/api/user 后端吐数据的地方
  router.get('/', controller.home.index);
  // 登录接口  /api/login
  router.get('/api/login',controller.login.index)
};