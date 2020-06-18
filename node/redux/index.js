const {createStore, combineReducers} = require('redux');
let isLogin = false;
let posts = [];
// 状态必须写在 reducer(纯函数) 中
// 
function loginReducer(state = isLogin, action){
    switch (action.type) {
        case LOGIN_STATUS:
            return !state;  // 返回一个新的state  而不是修改原有的state
        default:
            return state;
    }
}
function postsReducer(state = posts,action){
    switch (action.state) {
        case POSTS_STATUS:
            return action.newPosts;
        default:
            return state;
    }
}
// action: 纯对象 即 ({}), 
// type 字段: 区分 action 的作用, 整个应用唯一
const LOGIN_STATUS = Symbol('1');  // 值必须应用唯一 Symbol()中无论传什么生成的值都唯一
const POSTS_STATUS = Symbol('1'); 
const loginAction = {
    type:LOGIN_STATUS,
    a: 1
}
const postsAction = {
    type:POSTS_STATUS,
    newPosts: [{a:1},{a:2}]
}

// store
const rootReducer = combineReducers({
    login: loginReducer,
    posts: postsReducer
})
// 状态存到 store
// createStore 需要经过 reducer 生成 store
const store = createStore(rootReducer);

console.log('store',store.getState());

// action -> reducer 
// dispatch action 也要 reducer 生成 store
store.dispatch(loginAction);
store.dispatch(postsAction);
// 会自行去到 Reducer 
// 但是无法区分 loginReducer 和 postsReducer 都会去到