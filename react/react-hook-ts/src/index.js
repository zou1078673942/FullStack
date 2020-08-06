import React from 'react'
import ReactDOM from 'react-dom'
// import { MyComponent1 } from './demo2'
// import Smile from './Smile'
import {MyComponent1,MyComponent2,MyComponent3,MyComponent4,MyComponent5,MyComponent6} from './demo'
import { MyComponent } from './demo3'

function App () {
    return (
        <div className="App">
            <MyComponent/>
            {/* <MyComponent5/> */}
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