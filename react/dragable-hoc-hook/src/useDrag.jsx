import React,{useState} from 'react';
//  useState 之前：  组件 class function
//  useState  函数组件内部定义state
//  useState 是官方定义的 hook
//  useDrag 是自己定义出来的 hook
function useDrag() {
    state = {
        left: 0,
        top: 0
    }
    const [state, useState] = setState({
        top:0,
        left:0
    })
    const handleDown = (e) => {
        var startX = e.clientX;
        var startY = e.clientY;
        let obj = e.target.getBoundingClientRect();
        // 重置起点
        this.startX = startX - obj.x;   // obj.left  // 0
        this.startY = startY - obj.y;   // 0
        document.addEventListener('mousemove', this.handleMove);
        document.addEventListener('mouseup', this.handleUp);
    }
    const handleMove = (e) => {
        var newX = e.clientX;
        var newY = e.clientY;
        const diffX = newX - this.startX;
        const diffY = newY - this.startY;
        setState({
            left: diffX,
            top: diffY
        })
    }
    const handleUp = () => {
        document.removeEventListener('mousemove', this.handleMove);
        document.removeEventListener('mouseup', this.handleUp);
    }

}
export default useDrag