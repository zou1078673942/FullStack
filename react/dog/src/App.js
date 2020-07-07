import React, { Component } from 'react';
import './App.css';
import Song from './Song'

function Notification(num) {
  return 
}

class App extends Component {
  state = {
    barking: false,
    runing: false
  }
  bark(){
    this.setState({
      barking:true
    })
    console.log('bark')
  }
  run(){
    this.setState({
      runing:true
    })
    console.log('run')
  }
  barkAndRun(){
    this.bark();
    this.run();
    setTimeout(() =>{
      this.setState({
        barking:false,
        runing:false
      },() => {
        console.log('不叫了，停下')
      })
    },2000)
  }
  render() {
    return (
      <div className="App" >
        <div onClick={this.barkAndRun.bind(this)}>
          dog
        </div>
        <Song/>
      </div>
      
    );
  }
}

export default App;
