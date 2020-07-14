import React from 'react';
import Home from './component/index'
import { BrowserRouter, Route } from 'react-router-dom'
import Add from './component/page2/Add'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/add' component={Add}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
