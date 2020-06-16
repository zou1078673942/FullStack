## react beer 应用开发思路
- 搜索 -> 列表 -> 点进去 -> 创建路由
- 三个路由设计  

### 语义化设计 URL
- restful 命名规则
- 搜索 列表  /search/:searchTerm
- 详情页   /beer/:beerId=

1. 搭建应用架构
2. 组件化思维
3. list 列表的编写流程
4. router  this.props.match.params 主页搜索
5. / -> main.js -> loading -> list