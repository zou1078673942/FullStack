import React, { Component } from 'react';    // 按需加载     es6 解构
import CommentList from './CommentList';
import CommentInput from './CommentInput';
//  react  来自于 Facebook 
class CommentApp extends Component {  // 继承至 Component
    constructor(){
        super();
        this.state = {
            comments:[{
                username:'',
                content:''
            },{
                username:'',
                content:''
            }]
        }
    }
    render() {        // 接口
        const {comments} = this.state
        return (
            <div className="wrapper">
                {/* onSubmit 不是一个事件函数 */}
                {/* props： react 中类似于 属性 */}
                {/* state 和 props 在react中最重要的组件 */}
                {/* react组件:  render 页面输出(必须)
                                state 内部数据
                                props 外部数据 */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments = {comments}/>          
            </div>
        )
    }
    handleSubmitComment(comment) {
        // let {comments} = this.state;
        // comments.unshift(comment)
        // // console.log(comment,'sssssssssss')
        // this.setState({
        //     comments:comments
        // })
        this.setState({
            comments:[comment, ...this.state.comments]
        })
    }    
}

export default CommentApp;

