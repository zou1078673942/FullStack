import React from 'react';
import DemoUseEffect from './UseEffect'
import DemoUseContext from './UseContext'
import './App.css';
import Counter from './UseReducer'

function App() {
  return (
    <div>
      <Counter/>
      <DemoUseEffect/>
      <DemoUseContext/>
    </div>
  );
}

export default App;
