// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import {} from
// import * as serviceWorker from './serviceWorker';
// import { Provide } from './react-redux';
// import { createStore } from 'redux'
// import Test from './test'

// let action1 = {
//   type: 'INCREMENT'
// }
// let action2 = {
//   type: 'DECREMENT'
// }
// function reducer(state = 1, action) {
//   if (action.type === 'INCREMENT') {
//     return state + 1
//   } else if (action.type === 'DECREMENT') {
//     return state - 1;
//   } else {
//     return state;
//   }
// }
// let store = createStore(reducer)
// ReactDOM.render(
//   <React.StrictMode>
//     <Provide store={store}>
//       <Test />
//       <App />
//     </Provide>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react'
import ReactDOM from 'react-dom'

// function App(){
  
// }
function render(){
  currentIndex = 0
  ReactDOM.render(<App /> , document.getElementById('root'))
}

let hooks = []
let currentIndex = 0

const useState = (function() {
  return function (initValue) {
    if(!hooks[currentIndex]) hooks[currentIndex] = []
    let hookState = hooks[currentIndex]
    hooks[currentIndex][0] = hookState[0] || initValue
    function setState (newState) {
      hookState[0] = newState
      render()
    }
    hookState[1] = setState
    currentIndex ++
    return hookState
  }
})()

// const useState = (function(){
//   // let _state = a
//   let _state
//   // react 链表
// // preact 数组
//   return function(initValue){
//     _state = _state || initValue
//     function setState(newState){
//       _state = newState
//       render()
//     }
//     return [_state , setState]
//   }
// })()



function App (){
  const [count , setCount] = useState(0) //记住上一次 count
  return(
    <div>
      {count}
      <button onClick={()=>{setCount(count + 1)}}>+</button>
    </div>
  )
}

render()