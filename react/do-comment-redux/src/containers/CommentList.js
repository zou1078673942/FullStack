import React,{Component} from 'react';
import {connect} from 'react-redux';
import CommentList from '../components/CommentList'

class CommentListContainer extends Component{
    render(){
        console.log(this.props.comments)
        return (
            <CommentList
                comments = {this.props.comments}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments:state.comments
    }
}

export default connect(
    mapStateToProps
)(CommentListContainer)