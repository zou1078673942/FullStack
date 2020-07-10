import React from 'react';
import Home from './pages/Home'
import store1 from './store/1'
import ComA from './pages/ComA/ComA'
import ComB from './pages/ComB/ComB'
import ComC from './pages/ComC/ComC'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store1}>
      <div className="App">
        <Home/>
        <ComA />
        <ComB/>
        <ComC/>
      </div>
    </Provider>
  );
}

export default App;
