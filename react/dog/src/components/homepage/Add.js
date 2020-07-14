import React, { Component } from 'react';
import { Link } from 'react-router-dom';
let obj = []
class Add extends Component {
    constructor() {
        super()
        this.state = {
            nameVal: '',
            imgVal: ''
        }
    }
    handleNameVal(e) {
        this.setState({
            nameVal: e.target.value
        })
    }
    handleImgVal(e) {
        this.setState({
            imgVal: e.target.value
        })
    }
    handleLocalStroage() {
        obj.push({ 'img': `${this.state.imgVal}`, 'name': `${this.state.nameVal}` })
        localStorage.setItem('state', JSON.stringify(obj))
    }
    render() {
        // console.log(this.props)
        return (
            <div>

                <div className="add-top">
                    <Link to='/'><div>取消</div></Link>
                    <Link to='/'>{this.state.nameVal ? <div
                        onClick={this.handleLocalStroage.bind(this)}
                    >下一步</div> : <div
                    >下一步</div>}</Link>
                </div>
                <div className='add-main'>
                    <input value={this.state.imgVal} onChange={this.handleImgVal.bind(this)} type="text" />
                    <input type="text" value={this.state.nameVal} onChange={this.handleNameVal.bind(this)} />
                </div>
            </div>
        );
    }
}

export default Add;