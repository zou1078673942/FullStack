import React from 'react';
import {connect} from 'react-redux'
class ComA extends React.Component{
    handleCilck = () => {
        this.props.sendAction()
    }
    render(){
        return (
            <div>
                <button onClick={this.handleCilck}>
                    ++
                </button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            // 利用dispatch发送一个action
            dispatch({
                type:'add_action'
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(ComA)