import React,{ useCallback,useMemo } from 'react'
import './App.css'
import Header from './components/header/Header'
import { connect } from 'react-redux'
import Journey from './components/journey/Journey'
import { bindActionCreators } from 'redux'
import { exchangeFromTo } from './store/action'

function App(props) {
  const { from, to, dispatch } = props
  const onBack = useCallback(() => {
    window.history.back();
  },[])
  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo
    },dispatch)
  },[])
  return (
    <div className="App">
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}/>
      </div>
      <form action="./query.html" className='form'>
        <Journey from={from} to={to} {...cbs}/>
      </form>
    </div>
  )
}

// export default App;
export default connect(function mapStateToProps(state) {
  return state
},function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
})(App)