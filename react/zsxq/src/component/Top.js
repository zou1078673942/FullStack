import React,{Component} from 'react';
import './top.css'

class Top extends Component {
    state = {}
    render() {
        return (
            <div className="top">
                <p className='title'>知识星球</p>
                <img src={require("./icon/add.png")} alt=""/>
            </div>
        );
    }
}

export default Top;