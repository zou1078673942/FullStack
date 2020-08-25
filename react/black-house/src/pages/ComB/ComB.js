import React from 'react';
import {connect} from 'react-redux'
import { useEffect } from 'react';
function ComB (props) {
    console.log(props.value)
    const {value} = props
    useEffect(() => {
        console.log('--')
    },[value])
    return (
        <div>
            {value}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(ComB)