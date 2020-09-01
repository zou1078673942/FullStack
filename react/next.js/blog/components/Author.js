import {Avatar, Divider} from 'antd'
import '../styles/components/Author.css'
import {GithubFilled,WechatFilled,QqOutlined} from '@ant-design/icons'


const Author = () => {
    return (
        <div className='author-div comm-box'>
            <div><Avatar size={100} src='http://zt.hao661.com/qlwm/242508.html'/></div>
            <div className='author-introduction'>
                博主是一名计算机专业本科应届生，目前求职中~
                <Divider> 社交账号</Divider>
                <GithubFilled className='account'/> 
                <WechatFilled className='account'/>
                <QqOutlined className='account'/>
            </div>
        </div>
    )
}

export default Author