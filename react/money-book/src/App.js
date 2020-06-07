import React,{Component} from 'react';
import{BrowserRouter,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Create from './Pages/Create/Create'

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route path="/" exact component={Home}/>
          <Route path="/create" component={Create}/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;