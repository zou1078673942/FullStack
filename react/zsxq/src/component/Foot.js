import React, { Component } from 'react';
import './foot.css'

class Foot extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <img src={require('./icon/星球.png')} className='icon' alt=""/>
                <img src={require('./icon/动态.png')} className='icon' alt=""/>
                <img src={require('./icon/发现.png')} className='icon' alt=""/>
                <img src={require('./icon/我.png')} className='icon' alt=""/>
            </div>
        );
    }
}

export default Foot;