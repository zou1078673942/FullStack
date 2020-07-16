1. css reset 
    normalize.css
    index.css   css 移动业务的设置 
2. 无状态组件的创建流程可以练习
    - 组件插入父级组件中, 思考好props
    - 组件的类型如果是无状态组件
        - prop-types css propTypes
        - 形参props
        - return (<div></div>)
    - props 解构出来要的prop 
    - 功能函数建议由父组件打理
        纯粹的负责 render
        函数可以复用

3. 年轻的 react hooks 全新开发方式
    class Component -> function 函数式编程
    class + constructor + 生命周期 + render -> function + react hook
    - useCallBack (缓存函数)
    - useMemo

4. 状态组件的编写顺序
    - 数据 Provider store
    - 

5. redux
    - 简单的 redux 项目结构
        store.js  createStore  reducers
            中间件 axios  redux-thunk(让redux支持异步)
        reducers.js  combineReducers
        actions.js  数据请求 状态改变的触发都由actions来负责
            ActionTypes 可读性
    - redux API  ->  设计状态( reducer + aciton )
        初始值 from to   两个reducer函数
        函数 初始值 action return 初始值
        状态会怎么改变  ->  动作声明 SET_FROM
        - { type, payload } 解构action
        - switch case
        - actionTypes 可读性
        - 写出 actions
    - 数据组件化
        1. connect 高阶返回原组件
            connect({
                mapState,
                mapDispatch
            })(Component)
        2. 创建组件
        3. 状态组件, 无状态组件重用方法
    - reducer
        1. action 的标准做法
            - 返回{ type: payload: }更新reducer的状态
            - 组件里的事件、生命周期等功能  主要和数据、状态打交道, 归为Action来做
            - 所有的 action 都用  export function,   在组件中引入需要的 actions
            - bindActionCreators 
                actions 变成本地调用函数
            - useMemo 缓存函数
            - connct中第二个参数返回 action
        2. action 
            - from 北京     to 南昌
            - 两个action思想切换
            - 修改的本质 redux
    - from to 的复盘
        1. redux 编程思想  
            - reducers 纯函数 返回状态及接受状态的修改
                那一刻只有一个状态与之相对应: switch
            - actions actionsTypes 
                是更新reducer的工具 diapatch一个action
                from to 都有独立的reducer函数和action
            - exchagneFromTo()
                dispatch getState