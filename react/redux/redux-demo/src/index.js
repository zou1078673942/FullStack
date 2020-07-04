import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers,applyMiddleware,compose } from 'redux'
import {get} from 'axios';
import thunk from 'redux-thunk'

const counterReducer = function (state = {count:1}, action) {
	switch(action.type){
		case 'COUNT_ADD':
			return{
				count:state.count+1
			}
		case 'COUNT_REDUCE':
			return{
				...state,count:state.count-1
			}
			default:
				return state
		}
}

const postReducer = function(state = {list:[{title: 'hello'}]},action){
	switch(action.type){
		case 'LOAD_POSTS':
			return {
				...state,list: action.payload
			}
		default:
			return state
	}
}

// combineReducer 用来整合多个 reducer
const rootReducers = combineReducers({
	counter: counterReducer,
	post:postReducer
})

const store = createStore(
	rootReducers,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		applyMiddleware(...[thunk])
	)
)  // 创建一个 store

console.log(store)
console.log(store.getState())

store.dispatch({
	type:'COUNT_ADD',
	payload:{
		
	}
})

console.log(store)
console.log(store.getState())

store.dispatch({
	type:'COUNT_REDUCE',
	payload:{
		
	}
})
//  async 标记函数  使他默认异步
store.dispatch(async function(dispatch){
	const res = await getPostRequest()
	console.log(res)
	dispatch({
		type: 'LOAD_POSTS',
		payload: res.data
	})
})

console.log(store)
console.log(store.getState())

const getPostRequest = () => {
	return get('https://jsonplaceholder.typicode.com/posts')
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
