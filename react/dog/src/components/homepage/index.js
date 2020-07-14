import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import Main from './Main';
import Button from './Button';
class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <Search />
                <Main />
                <Button />
            </React.Fragment>
         );
    }
}
 
export default Homepage;