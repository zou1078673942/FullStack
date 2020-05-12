import React from 'react';
import ReactDOM from 'react-dom';    //  index.js  入口文件   负责缝合关系
import CommentApp from './CommentApp';
//  css in js    这是一个webpack
import './index.css'   // 告别 link 标签

//  渲染 DOM 树
ReactDOM.render(
  //  react 的 世界
  <CommentApp />,
  //  下面是真实 dom
  document.getElementById('root')
)