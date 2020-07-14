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
                    <span></span>
                    <span className='next add-top'>下一步</span>
                </Link>
                <img src={require('../icon/bg.png')} className="add-img"/>
                <input type="text" name="" id="title"/>
                <input type="text" name="" id="author"/>
            </div>
        );
    }
}
 
export default Add;