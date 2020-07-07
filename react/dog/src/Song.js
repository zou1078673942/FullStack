import React, { Component } from 'react';
import './App.css';

class Song extends Component {
    state = {
        content:['song']
    }
    componentDidMount(){
        console.log(document.getElementsByClassName('Song').clientHeight)
    }
    render() {
        return (
            <div className="Song">
                {this.state.content}
            </div>
        );
    }
}

export default Song;
