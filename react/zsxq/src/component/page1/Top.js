import React,{Component} from 'react';
import './top.css'
import '../../App.css'
import { Link } from 'react-router-dom';

class Top extends Component {
    state = {}
    render() {
        return ( 
            <div className="top">
                <div className='wrapper'>
                    <span className="iconfont"></span>
                </div>
                <p className='title'>知识星球</p>
                <Link to='/add' className='link'>
                <div className='wrapper'>
                    <span className="iconfont">&#xe506;</span>
                </div>
                </Link>
            </div>
        );
    }
}

export default Top;