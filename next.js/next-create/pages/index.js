import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {

  // Router.events 路由时间
  // routeChangeStart   路由变化之前
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete

  Router.events.on('routeChangeStart',(...arg) => {
    console.log(...arg,'---------')
  })

  return (
    <>
      Home
      <Link href="/page1"><a>page1</a></Link>
      <Link href="/page2"><a>page2</a></Link>
      <div>
        <button onClick={() => {Router.push('/page1')}}>page1</button>
      </div>
      <button onClick={() => {Router.push({pathname:'/somePage',query:{name:'page'}})}}>page</button>
    </>
  )
}

export default Home