- router
    1. react-router
       react-router-dom
       react-router-config  使得路由嵌套清晰
    当路由比较负责时，传统的手写router/route配置难以维护
    企业级的router配置方案 react-router-config, 清晰, 可维护 routes/index.js

    layout app中总有几套配置，匹配那个级别的所有路由
    routes react-router-config renderRoutes(route.routes)

- 路由的本质是什么？
    页面切换
    一个嵌套解构