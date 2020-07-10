import React, { Component } from 'react';
import store from '../store/index'
import {sendAction} from '../action/index'
class Home extends Component {
    handleClick = () => {
        const action = sendAction()
        store.dispatch(action)
    }
    componentDidMount(){
        store.subscribe(() => {
            this.setState([])
        })
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleClick.bind(this)}>点我</button>
                <div>{store.getState().value}</div>
            </div>
        );
    }
}
 
export default Home;
