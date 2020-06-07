import React, { Component } from 'react'
import CommentInput from './CommentInput'

class Comment extends Component {
  constructor () {
    super()
   
  }


  render () {
    return (
        <div>
            {this.props.comment.content}
        </div>
        
    )
  }
}


export default Comment