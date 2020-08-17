import React, { Component } from 'react';

const sum = 2 ** 2

function obsever() {}

@obsever
class App extends Component {
  render() {
    return (
      <div>
        <img src="baidu.com" alt="baidu" className="box"/>
      </div>
    )
  }
}