import React, { Component } from 'react';
import './foot.css'
import '../../App.css'

class Foot extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
               <span className="iconfont">&#xe74f;</span>
               <span className="iconfont">&#xe614;</span>
               <span className="iconfont">&#xe61b;</span>
               <span className="iconfont">&#xe649;</span>
            </div>
        );
    }
}

export default Foot;