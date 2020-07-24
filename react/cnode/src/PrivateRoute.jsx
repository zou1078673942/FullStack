import React from 'react'
import authStore from './store/auth'
import {Redirect,Route} from 'react-router-dom'

function PrivateRoute (props) {
    const isLogin = authStore.isLogin
    const {path,component} = props
    if (!isLogin) {
        return <Redirect to="/login"/>
    }
    return (
        <Route path={path} component={component} />
    )
}
export default PrivateRoute