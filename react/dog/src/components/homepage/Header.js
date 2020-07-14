import React, { Component } from 'react';
import jia from '../../img/1.png'
class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <div className='Header-img'><img src={jia} alt="" /></div>
                    <span className='app-name'>知识星球</span>
                </div>
            </React.Fragment>);
    }
}

export default Header;