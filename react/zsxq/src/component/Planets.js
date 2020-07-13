import React, { Component } from 'react';
import './planets.css'
import Search from './Search'


class Planets extends Component {
    state = {}
    render() {
        return (
            <div>
                <Search></Search>
                <div className="planets">
                    planets
            </div>
            </div>
        );
    }
}

export default Planets;