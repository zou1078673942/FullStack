import React from 'react';
import { PropTypes } from 'prop-types';
import './Journey.css'
import switchImg from '../../assets/imgs/switch.svg'

function Journey(props) {
    const { from, to, exchangeFromTo } = props
    return (
        <div className="journey">
            <div className="journey-station">
                <input type="text" className="journey-input" value={from} name="to" readOnly/>
            </div>
            <div className="journey-switch" onClick={() => {exchangeFromTo()}}>
                <img src={switchImg} alt=""/>
            </div>
            <div className="journey-station">
                <input type="text" className="journey-input" value={to} name="to" readOnly/>
            </div>
        </div>        
    )
}

export default Journey