import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button,List } from 'antd';
import store from './store'


class TodoList extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input placeholder='Write here' 
                    style={{width:'250px',marginRight:'10px'}}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={[]}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoList;