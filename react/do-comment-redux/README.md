## react 
- react 全家桶
    1. react 
    2. react-router 
    3. react-redux

    react = 数据 + UI

    效果:  数据不需要派发来做   父组件 -> 子组件
    redux:  任何组件可以随时和 redux connect

搭建流程: store -> Provier -> App 
connect(mapStateToProps)()

 1. 状态全部归 redux 管理
 2. connect 可以从 redux 中借用数据