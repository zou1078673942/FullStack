import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './add.css'

class Add extends Component {
    state = {  }
    render() { 
        return (
            <div className="add-wrapper">
                <Link to='/' className='link add'> 
                    <span className="back add-top">取消</span>
                    <span className='next add-top'>下一步</span>
                </Link>
                <img src={require('../icon/bg.png')} className="add-img"/>
                <div className="new-input">
                    <input type="text" className="new-title" id="title"/>
                    <input type="text" className="new-author" id="author"/>
                </div>
            </div>
        )
    }
}

export default Add;