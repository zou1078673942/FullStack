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

- search 业务
    接口文档
    - 热门搜索
        url   /search/hot
        参数  null 
        返回值  result.hot
    - 搜索建议
        url   /suggest?keyword=
        参数  keyword
        返回值   albums
    - 搜索结果

- 数据接口汇总及分析
    当react项目分为组件和reducer之后，界面由数据驱动，数据通过接口由后端提供，
    理清后端接口  等于把握项目整体  通过总结后端接口， 可以提升开发业务能力
    1. 前后端协作
        接口文档
        连调   
            mock.js
            前端拿到设计稿  使用mock.js把前端调通 
            项目上线前几天 (axios baseURL切换)  约后端fw连调
            提交测试， 准备上线
    2. 业务经验分析
        搜索
        - 热点搜索
        - 
        - 