import React,{Component,Fragment} from 'react';

class LitleSis extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul>
                        {
                            this.state.list.map((item,index) => {
                            return( 
                                <li 
                                    key={index+item}
                                    onClick={this.deleteItem.bind(this,index)}>
                                    {item}
                                </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    }
    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }
    addList(e){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}

export default LitleSis;