import React,{ useCallback } from 'react'
import './App.css'
import Header from './components/header/Header'
import { connect } from 'react-redux'
import Journey from './components/journey/Journey'

function App(props) {
  const { from, to } = props
  const onBack = useCallback(() => {
    window.history.back();
  },[])
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className='form'>
        <Journey from={from} to={to}/>
      </form>
    </div>
  )
}

// export default App;
export default connect(function mapStateToProps(state) {
  return state
},)(App)