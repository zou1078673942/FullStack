import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Collect from './Collect';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/collect" component={Collect}/>
    </BrowserRouter>
  );
}

export default App;
