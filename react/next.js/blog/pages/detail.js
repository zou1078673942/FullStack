import React from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem'
import {HomeOutlined,FileTextOutlined,SmileOutlined} from '@ant-design/icons'
import '../styles/pages/detail.css'
const Detailed = () => (
  <>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        <div>
          <div className='bread-div'>
            <Breadcrumb>
              <BreadcrumbItem><a href="/">首页</a></BreadcrumbItem>
              <BreadcrumbItem><a href="/list">文章</a></BreadcrumbItem>
              <BreadcrumbItem>xxx</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div>
                <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
                </div>

                <div className="list-icon center">
                  <span><HomeOutlined /> 2019-06-28</span>
                  <span><HomeOutlined /> 文章</span>
                  <span><HomeOutlined /> 5498人</span>
                </div>

                <div className="detailed-content" >
                  详细内容，下节课编写
                </div>

             </div>

        </div>
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
      </Col>
    </Row>
    <Footer/>
 </>
)

export default Detailed