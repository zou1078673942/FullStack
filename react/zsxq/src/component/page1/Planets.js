import React, { Component } from 'react';
import './planets.css'
import Search from './Search'


class Planets extends Component {
    state = {}
    render() {
        return (
            <div className='content'>
                <Search></Search>
                <div className="planets">
                    p;anets
                </div>
            </div>
        );
    }
}

export default Planets;