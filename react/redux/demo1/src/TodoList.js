import React, { Component, useState } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import store from './store'


function TodoList (props) {
    const [list, useList] = useState(store.getState().list)
    // const setList = useList((e) => {
    //     console.log(e)
    // })
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input 
                    placeholder='Write here'
                    style={{ width: '250px', marginRight: '10px' }}
                />
                <Button type='primary'>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        </div>
    )
}


export default TodoList;