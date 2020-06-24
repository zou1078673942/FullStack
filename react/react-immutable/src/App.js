import React from 'react';
import {Map} from 'immutable';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  state = {
    loginInfo: {
      userName: null
    },
    posts:[{content:1}],
    userInfo:Map({
      name: 'zou',
      age:123,
      skill:{
        excellent:['react'],
        practice:['node']
      }
    })
  }
  componentDidMount(){
    setTimeout(() =>{
      const {posts} = this.state.posts.slice(0);
      // 拷贝之后再操作
      const newUserInfo = this.state.userInfo.set('name', 'lilei'); 
      posts.push({content:2});
      const loginInfo ={
        ...this.state.loginInfo,
        userName: 'lo'
      }
      this.setState({
        posts
      })
    })
  }
  render() {
    const {posts} = this.state;
    return (
      <div>
        {posts.length}
      </div>
    )
  }
}

export default App;
