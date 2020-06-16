import React from 'react';
// BrowserRouter as Router 重命名 利于阅读 
/**  Router 是路由总管
 *   Route 表示某一个路由
 *   Switch  唯一
 *   NavLink  为 a 标签的组件化
 *   Redirect  如果 switch 没选到就跳转
 */
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect} from 'react-router-dom';
import Recommend from './recommend/Recommend';
import Ranking from './ranking/Ranking';
import Search from './search/Search';
import './App.styl';
import logo from '../assets/imgs/logo.png';

//  hashRouter # 兼容性更好 

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className='app'>
                    <header className='app-header'>
                        <img src={logo} alt="logo" className='app-logo'/>
                        <h1 className='app-title'>Mango Music</h1>
                    </header>
                    <div className='music-tab'>
                        {/* 站内用 NavLink  站位用 a */}
                        <div className="tab-item">
                            <NavLink className='nav-link' to='/recommend'><span>推荐</span></NavLink>                           
                        </div>
                        <div className="tab-item">
                            <NavLink className='nav-link' to='/ranking'><span>排行榜</span></NavLink>   
                        </div>
                        <div className="tab-item">                      
                            <NavLink className='nav-link' to='/search'><span>搜索</span></NavLink>   
                        </div>                          
                    </div>
                    <Switch>
                        <Route exact path='/recommend' component={Recommend}/>
                        <Route path='/ranking' component={Ranking}/>
                        <Route path='/search' component={Search}/>
                        <Redirect from='/' to='/recommend'/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;