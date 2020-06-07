import React from 'react';
import { Route,Link,useRouteMatch } from 'react-router-dom'
import List from './List'
import Chart from './Chart'
import HomeHeader from './HomeHeader'

//  <>  组件：React.fragment
function Home(){
    let {path,url} = useRouteMatch();
        return (
            <>
                <HomeHeader/>
                <Link to={`${url}/list`}>列表模式</Link>
                <Route path={path} exact component={List}/>
                <Route path="/list" component={List}/>
                <Route path="/chart" component={Chart}/>
            </>
        )
}

export default Home;