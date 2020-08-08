- class  setState -> 父子组件(props) -> context -> redux useRducer -> mobx connect 装饰器模式
1. 当数据流动层次超过两层，简单的useState传起来太麻烦了
    而redux useReducer太重，可以考虑action可以忽略 useContext 
    useState 和 React.createContext结合 数据模板+实际操作
2. reducer 函数是灵魂
    redux 企业级的数据状态安全及架构
    - state 读可以  但不能写
    - state 写操作  dispatch action -> reducer -> 新老状态的切换  
    - reducer 一个旧状态通过同样的type，和payload新状态一定是一样的