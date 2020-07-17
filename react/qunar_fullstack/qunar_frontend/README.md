- 全栈项目
    前后端分离  UI与redux分离
    - 城市数据怎么做 
      reducer: 
        cityData: null
        isCitySelectorVisible: false
        isLoadingCityData: ture
      action: 
        ACTION_SET_CITYDATA
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
        ACTION_SET_IS_LOADING_CITY_DATA
      store:

    - 后端API设计流程
        1. mongodb/mysql 写真后端
            mockerAPI 解决了跨域问题
        2. 模块化输出 api 配置
        3. require json     Mocker.mock    random
            配置
    - api -> action -> reducer -> connect -> 组件
    - 所有的数据请求都放在aciton中
        异步的action   dispatch多个aciton

作业 ： isLoadingCityData 完成reducer 和相应的 action 并在fetchCityData中处理跟它相关的逻辑