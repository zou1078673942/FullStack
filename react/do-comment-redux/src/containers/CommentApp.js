import React,{Component} from 'react';
import { render } from 'react-dom';
import CommentList from './CommentList';


export default class CommentApp extends Component {
    render(){
        return(
            <div className="wrapper">
                {/* Comment */}
                <CommentList />
            </div>
        )
    }
}