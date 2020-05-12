import React, { Component } from 'react';    // 按需加载     es6 解构
import CommentList from './CommentList';
//  react  来自于 Facebook 
class CommentApp extends Component {  // 继承至 Component
    render() {        // 接口
        return (
            <div className="wrapper">
                <CommentList />          
            </div>
        )
    }
    
}

export default CommentApp;

