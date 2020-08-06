1. tsx 工作流之中

.tsx React组件 -> webpack.config.js -> awesome-typescript-loader -> tsconfig.json -> typescript .jsx -> babel( polyfill + env + plugin 装饰器模式 ) -> react DOM -> webpack-dev-server

2. react-scripts
- 约定

3. hooks 特色
- useState
    当state为obj时 {...obj, name: value}
- useEffect
- useCallBack
- useMemo
- useRef
- useReducer

4. 分析下react项目是如何运行的
- JSX编译的过程
    - 节点的类型
        通过正则匹配; <(.+)></>
    1. 标签节点
        - 标签节点
        - 非标签节点 递归
        - 文本   退出条件

5. 你在做项目碰到了什么问题
- 接口文档  api
- 互相交流  极客
- useRef 解决闭包的副作用

6. 数据在hooks中怎么走
- useState -> context 轻量 | reducer 重量 | useReducer | mobx