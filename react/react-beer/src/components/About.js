import React from 'react'
import { render } from 'react-dom';
import Header from './Header';

class About extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <Header siteName = "Bear me!"/>
                关于我们
            </div>
        )
    }
}

export default About;