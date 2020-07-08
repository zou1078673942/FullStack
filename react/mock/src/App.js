import React, { Component } from 'react';
import './App.css'
import axios from 'axios'
import './mock/data'

// 数据和组件是分离开的

// 函数返回值为一个组件
// /posts/ axios api url/comments/
// Post 组件作为参数 高阶组件
// 通用性地  提供数据请求和更i性能的解决方案
// class Post extends Component{
//   render(){
//     return (
//       <div>
//         Post
//       </div>
//     )
//   }
// }
class Post extends Component {
  state = {  }
  render() { 
      return ( 
          <div>
            <p>
              {this.props.msg}
            </p>
          </div>
       );
  }
}
class Comment extends Component {
  state = {  }
  render() { 
      return ( 
          <div>
              {this.props.auther}
          </div>
       );
  }
}

const loadAndRefresh = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    state ={}
    componentDidMount(){
      // 数据请求
      this._loadData();
    }

    async _loadData(){
      this.setState({
        msg:'数据加载中'
      })
      axios.get(url)
        .then(res => {
          this.setState({
            msg:res.data.title,
            auther:res.data.auther,
            list:res.data.list
          })
        })
    }
    render (){
      const props = {
        msg: this.state.msg,
        auther:this.state.auther,
        list:this.state.list
      }
      return (
        <WrappedComponent {...props}/>
        )
      }
    }
  }
const WrappedPost = loadAndRefresh('/posts/')(Post)
const WrappedComment = loadAndRefresh('/posts/')(Comment)

class App extends Component {
  state = {  }
  render() {
    return ( 
      <div className="App">
        {/* message */}
        {/* <Post/> */}
        <WrappedPost />
        <WrappedComment/>
      </div>
     );
  }
}

export default App