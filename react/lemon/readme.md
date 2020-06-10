## 搭建开发流程
- 没有使用create-react-app    react 开发的脚手架
    - 从0开始  构建一个react项目 
      选择 webpack 工具(开发打包工具)
      react 的开发流程
      1. webpack  开发流程工具
      2. webpack-cli  开发工具的命令行工具 commend line
      3. webpack-dev-server  可以让我们的应用在3000端口启动

- typescript 
    tsconfig.json    根目录下的ts 配置

- @babel/core   转码器
    可以让我们用最新的es6特性 运行在所有的浏览器上
    .babelrc  处理js

- bootstrap
    前端 css 
    
1. src 是开发目录   业务代码存储
   index.ts   入口文件  entry
   index.html    模板
   webpack.config.js   负责以上步骤  webpack-dev-server --open
2. .ts   
    typescript awsome-typescript-loader  tsconfig.json
    .ts -> .js
3. @babel/cli  @babel/core  @babel/preset-env
    .babelrc     将 js转译成任何都能运行

开发流程搭建完成

## 开发业务

- react react-dom
  @types/react @types/react-dom 
  @types  类型约定  ts + react   @babel/core