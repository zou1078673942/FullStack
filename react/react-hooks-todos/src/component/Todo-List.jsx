import React,{useState} from 'react';
import { List, Icon } from 'antd'

const { Item } = List

const TodoList = ({ todes, onToggleFinished }) => {
    // 点击 删除
    const onDelete = e => {

    }
    return (
        <div className="list-wrap">
            {todos.length === 0? (
                <p>暂无待办事项</p>
            ):(
                <List
                    itemLayout = "horizontal"
                    dataSource = {todos}
                    renderItem = {({ id, text, finished}, idx) => {
                        const itemClasses = classNames({
                            "list-item": true,
                            "list-item__finished": finished
                        })
                        return (
                            <Item className="list-item list-item_finished">
                                <img src="" alt="" className="list-item--avater"/>
                            </Item>
                        )
                    }}
                />
            )}
        </div>
    )
}