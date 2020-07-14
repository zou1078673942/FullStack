import React, { Component } from 'react';
import './planets.css'
import Search from './Search'
import { Link } from 'react-router-dom'


class Planets extends Component {
    state = {
        lists: []
    }
    componentDidMount() {
        if (localStorage.getItem('state')) {
            const state = JSON.parse(localStorage.getItem('state'))
            this.setState({
                lists: state
            })
        }
    }
    render() {
        return (
            <div className='content'>
                <Search></Search>
                <div className="planets">
                    {this.state.lists.map((planet, i) => {
                        return (
                            <Link to='#' key={i} className='link planet-box'>
                                <div>
                                    <div className="planet-pic">
                                        <img src={require('../icon/bg.png')} alt="" />
                                    </div>
                                    <div className="planet-name">{planet.name}</div>
                                    <div className="planet-author">{planet.author}</div>
                                </div>
                            </Link>
                        )
                    })}
                    <Link to='/add' className='link planet-box add'>
                            <div className="planet-add">
                                <span className="iconfont add-planet">&#xe626;</span>
                                <span className='build'>创建星球</span>
                            </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Planets;