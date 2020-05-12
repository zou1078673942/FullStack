import React, { Component } from 'react';
import CommentInput from './CommentInput';

class ComponentList extends Component {
    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <ul className="comment">
                    <li></li>
                </ul>
            </div>
        )
    }
    handleSubmitComment(comment) {
        console.log(comment)
    }
}


export default ComponentList;