// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import {HelloComponent} from './hello'

// ReactDOM.render(
//     <HelloComponent userName='John'/>,
//     document.getElementById('root')
// )
import * as React from 'react'
import * as ReactDom from 'react-dom'


import { HelloComponent } from './hello'

ReactDom.render(
  <HelloComponent userName='John' />,
  document.getElementById('root')
)
