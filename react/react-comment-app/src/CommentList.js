import React, { Component } from 'react';
import Comment from './Comment';


class ComponentList extends Component {
    render() {
        // console.log(this.props,'sss');
        let { comments } = this.props;
        return (
            <div>
                {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
    
}


export default ComponentList;