import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect,context } from './react-redux'

function App(props) {
  const context1 = useContext(context)
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = () => {
  return {}
}
const mapDispatchToProps = (state) => {
  return {
    count: state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
