import React,{Component} from 'react';
import './top.css'
import '../../App.css'

class Top extends Component {
    state = {}
    render() {
        return (
            <div className="top">
                <div className='wrapper'>
                    <span className="iconfont"></span>
                </div>
                <p className='title'>知识星球</p>
                <div className='wrapper'>
                    <span className="iconfont">&#xe506;</span>
                </div>
            </div>
        );
    }
}

export default Top;