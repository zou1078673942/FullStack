import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname}为你服务-
                {this.props.content}
            </li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
Item.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
Item.defaultProps={
    avname:'zz'
}

export default Item;