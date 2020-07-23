import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/collect" component={Collect}/>
    </BrowserRouter>
  );
}

export default App;
