import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import './scroll.styl';

class Scroll extends React.Component{
    componentDidMount(){
        this.scrollView = ReactDom.findDOMNode(
            this.refs.scrollView
        );
        if(!this.bScroll){   // 防止多词渲染
            this.bScroll = new BScroll(this.scrollView,{
                probeType:3,
                click: this.props.click
            })
            if(this.props.onScroll) {
                this.bScroll.on('scroll',(scroll) => {
                    this.props.onScroll(scroll);
                })
            }
        }
    }
    refresh(){
        if(this.Scroll){
            this.Scroll.refresh();
        }
    }
    render(){
        console.log(this.props.children)
        return (
        <div className="scroll-view" ref='scrollView'>
            {this.props.children}
        </div>
        )
    }
}

Scroll.defaultProps ={
    click: true,
    onScroll: null,
    refresh: false
}
Scroll.PropTypes={
    click: PropTypes.bool,
    onScroll: PropTypes.func,
    refresh: PropTypes.bool
}

export default Scroll;