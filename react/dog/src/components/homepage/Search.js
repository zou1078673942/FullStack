import React, { Component } from 'react';
import search from '../../img/2.png'
class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='Search'>
                <input className='Search-input' type="text" placeholder='搜索用户、星球'/>
                <div className='Search-img'>
                    <img src={search} alt=""/>
                </div>
            </div>
         );
    }
}
 
export default Search;