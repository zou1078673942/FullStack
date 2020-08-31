import Head from 'next/head'
import { Button } from 'antd'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>17_Blog</title>
      </Head>
      <Header/>
      {/* <Button>按钮</Button> */}
    </div>
  )
}
