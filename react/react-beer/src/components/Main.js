import React from 'react';
import Header from './Header';
import Search from './Search';

class Main extends React.Component{
    constructor(){
        super();
    }
    componentDidMount () {  // 生命周期 
        //  match：  patch 中匹配的值
        const params = this.props.match.params;
        const searchTerm = this.props.match.params.searchTerm || undefined;
        this.loadBeers(searchTerm);
    }
    loadBeers(){
        
    }
    render(){
        return(
            <div className = "wrapper">
                <Header siteName = "Bear me!"/>
                <Search />
            </div>
        )
    }
}

export default Main;