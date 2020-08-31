import React from 'react'
import '../styles/components/Header.css'
import {Row,Col,Menu} from 'antd'
import {HomeOutlined,FileTextOutlined,SmileOutlined} from '@ant-design/icons'

const Header = () => {
    return (
        <div className="header">
            <Row type='flex' justify='center'>
                {/* xs 为小于 756px  */}
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>  
                    <span className="header-logo">17</span>
                    <span className="header-text">Blog</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal'>
                        <Menu.Item key='home'>
                            <HomeOutlined/>
                            首页    
                        </Menu.Item>
                        <Menu.Item key='article'>
                            <FileTextOutlined />
                            文章
                        </Menu.Item>
                        <Menu.Item key='life'>
                            <SmileOutlined />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header