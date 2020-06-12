import React from 'react';
import Search from './Search';
import Results from './Results';
// StatefullComponent StatelessComponents

class Main extends React.Component {
    state = {
        beers:[],
        loading: true
    }
    componentDidMount(){
        // 首页查出所有的 beer
        // /search/:searchTerm 只搜索searchTerm 
        const params = this.props.match.params || {};
        const searchTerm = params.searchTerm || undefined;
        this.loadBeers(searchTerm);
    }

    loadBeers(searchTerm='hops'){
        
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
        //  .then()  异步执行  避免数据还没取到就执行 
        .then(data => data.json())
        .then(data => {
            const beers = data.data || [];
            this.setState({
                loading:false,
                beers
            })
            console.log(searchTerm)
            console.log(data);
        })
    }
    // 如何实现 列表搜索 一体
    render(){
        return(
            <div>
                {/* 独立的搜索组件 */}
                <Search/>  
                {/*  */}
                <Results beers={this.state.beers} loading={this.state.loading}/>
            </div>
        )
    }
}

export default Main;