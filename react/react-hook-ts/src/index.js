import React from 'react'
import ReactDOM from 'react-dom'
import { MyComponent1 } from './demo2'
// import Smile from './Smile'
// import {MyComponent1,MyComponent2,MyComponent3,MyComponent4} from './demo'

function App () {
    return (
        <div className="App">
            <MyComponent1/>
            {/* <Smile/>             */}
            {/* <MyComponent1/>
            <MyComponent2/>
            <MyComponent3/><br/>
            <MyComponent4/> */}
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>,rootElement)