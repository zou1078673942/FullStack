1. 做一个 react 项目   仿一个音乐类的
2. 做一个可以上线的业务   思路 -> 架构 -> 技能点

- react 组件由 组件component 实例和一个css 文件 styl
  做一个 react 项目时， 不一定要用 creact-react-app(官方), 
  这是一个项目模板
  模块化命名 ：
    - 类文件开头大写
    - 组件文件夹及css同名小写
    - 便于维护管理

- 单页应用  Single Page Application SPA
    由路由驱动 切换其中的内容 但是不刷新页面 根据路由的配置，把相应的组件显示出来
    提高网站的用户体验

- 根据界面 分析
    - 头尾不动 中间内容根据路由匹配（单页应用）

- Loading 组件 在整个应用中是什么地位？
  在哪个目录下创建？
  containers
  components 路由级别组件
  Loading 服务于任何 listAPI 通用组件
  1. 数据请求阶段， 显示loading
  2. 数据到达之后， 隐藏loading
  由父组件决定 显示/隐藏 
  因此要给 loading 子组件传参

- @/api/
  - 分层能力  职责分离 使代码复杂
    大型化的前提
    便于维护 和 易于阅读