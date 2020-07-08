import React, { Component } from 'react';
import './App.css';
import DragAble1 from './DragAble1'
import Drag from './Drag'

function withDragAble(Com) {
  class WithDragAble extends Component {
    state = {
      left: 0,
      top: 0
    }
    handleDown= (e) => {
      var startX = e.clientX;
      var startY = e.clientY;
      let obj = e.target.getBoundingClientRect();
      // 重置起点
      this.startX = startX - obj.x;   // obj.left  // 0
      this.startY = startY - obj.y;   // 0
      document.addEventListener('mousemove', this.handleMove);
      document.addEventListener('mouseup', this.handleUp);
    }
    handleMove = (e) => {
      var newX = e.clientX;
      var newY = e.clientY;
      const diffX = newX - this.startX;
      const diffY = newY - this.startY;
      this.setState({
        left: diffX,
        top: diffY
      })
    }
    handleUp = () => {
      document.removeEventListener('mousemove', this.handleMove);
      document.removeEventListener('mouseup', this.handleUp);
    }
    render() {
      const { left, top} = this.state;
      return (
        <div style={{left, top}} className="dragable"
        onMouseDown={this.handleDown}
        >
          <Com />
        </div>
      )
    }
  }
  return WithDragAble;
}
const DragDrag = withDragAble(Drag)
const DragComponent = withDragAble(DragAble1)
class App extends Component {
  render() {
    return (
      <div>
        <DragDrag />
        <DragComponent />
      </div>
    );
  }
}

export default App;
