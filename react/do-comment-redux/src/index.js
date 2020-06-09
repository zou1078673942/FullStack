import React from 'react';
import ReactDOM from 'react-dom';
//  redux 创建一个 store 中央仓库

import {createStore} from 'redux'; // react 三巨头 数据管理
import {Provider} from 'react-redux';  // 数据放到仓库  和组件没有依赖关系   独立于组件
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments';

//  store 单一状态树  一个项目中只有一个
const store = createStore(commentsReducer)   //  仓库

ReactDOM.render(
    //  provider 可以理解为 快递员
    <Provider store={store}>
        <CommentApp />
    </Provider>,
    document.getElementById('root')
)