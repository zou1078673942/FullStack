import React,{Component,Fragment} from 'react';
import Item from './Item'
import axios from 'axios'

class LitleSis extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
    }
    componentDidMount(){
        axios.post('')
        .then((res) => {})
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input 
                    value={this.state.inputValue} 
                    onChange={this.inputChange.bind(this)}
                    ref = {(input) =>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                    <ul ref={(ul) =>{this.ul=ul}}>
                        {
                            this.state.list.map((item,index) => {
                            return(
                                <Item 
                                    list={this.state.list}
                                    content={item} 
                                    key={index+item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}    
                                />
                            )
                            })
                        }
                    </ul>
                </div>
            </Fragment>
        )
    } 
    inputChange(){
        this.setState({
            inputValue: this.input.value
        })
    }
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },() => {
            console.log(this.ul.querySelectorAll('li').length)
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