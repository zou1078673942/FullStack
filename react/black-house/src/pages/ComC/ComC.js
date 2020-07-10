import React from 'react';
import {connect} from 'react-redux'
class ComC extends React.Component{
    handleCilck = () => {
        this.props.sendAction()
    }
    render(){
        return (
            <div>
                <button onClick={this.handleCilck}>
                    clean  
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
                type:'clean_action'
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(ComC)