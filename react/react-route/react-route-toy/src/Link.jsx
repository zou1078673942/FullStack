import React, { useContext } from 'react';
import { context } from './BrowserRouter'

export default function Link(props) {
  const { pathname, update } = useContext(context)
  const { to, children } = props
  const handleClick = (e) => {
    e.preventDefault()   // 阻止默认事件   其他逻辑正常进行
    window.history.pushState(null, null, to)
    // window.location.reload()
    // 整个页面更新
    // Context
    update({pathname: to})
  }
  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  )
}