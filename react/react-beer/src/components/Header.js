import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
        <h1>
            <Link to="/">{this.props.siteName}</Link>
            {/* <Link to="/about">about</Link> */}
        </h1>
        )
    }
}

export default Header;