let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}

let store = createStore(reducer)
store.dispatch(action1)
store.dispatch(action2)
console.log(store.getState())

// redux-thunk
// let action3 = function (dispatch) {
//     axios().then(() => {
//         dispatch()
//     })
// }
// store.dispatch(action3)

//  洋葱模型 (中间件的思想)
//  

function reducer (state = 1, action) {
    if (action.type === 'INCREMENT') {
        return state + 1
    }else if(action.type === 'DECREMENT'){
        return state - 1
    }else{
        return state
    }
}

function createStore (reducer) {
    let state
    function dispatch (action) {
        state = reducer(state,action)
    }
    dispatch({type:'DEFAULT'})   // 为 reducer 中的 state 默认值
    function getState () {
        return state
    }
    return {
        dispatch, getState
    }
}