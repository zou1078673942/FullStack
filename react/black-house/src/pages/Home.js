import React, { Component } from 'react';
import store from '../store/index'
import {sendAction} from '../action/index'
class Home extends Component {
    handleClick = () => {
        const action = sendAction()
        store.dispatch(action)
    }
    render() { 
        return ( 
            <button onClick={this.handleClick.bind(this)}>点我</button>
        );
    }
}
 
export default Home;
