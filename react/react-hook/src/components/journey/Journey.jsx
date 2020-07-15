import React from 'react';
import { PropTypes } from 'prop-types';
import './Journey.css'

function Journey (props) {
    const { from, to } = props
    return (
        <div className='journey-wrapper'>
            <span className="from">{from}</span>
            <span className="change"></span>
            <span className="to">{to}</span>
        </div>
    )
}

export default Journey