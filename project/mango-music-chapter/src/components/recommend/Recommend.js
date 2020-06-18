import React from 'react';
import './recommend.styl';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import Loading from '../../common/loading/Loading';
// 所有的数据请求都放到api目录下
import {getNewAlbum} from '../../api/recommend';
import Lazyload from 'react-lazyload';
//  swiper
class Recommend extends React.Component{
    state = {
        newAlbums: [],
        loading: true,
        sliderList: [{
            id:1,
            picUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592368705429&di=73d09705aff8ba54fd2701a59407b662&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
            linkUrl:'https://www.baidu.com'
        },{
            id:2,
            picUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592323159412&di=d88b5d29279a1833e27e7cc09f4775f5&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
            linkUrl:'https://www.baidu.com'
        },{    
            id:3,
            picUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592323159411&di=4f7bddd58051e107a1fed69e6c0bae8e&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D3363001160%2C1163944807%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D830',
            linkUrl:'https://www.baidu.com'
        }]
    }
    componentDidMount(){
        new Swiper('.slider-container',{
            loop:true,
            autoplay:{
                delay:1000,
            },
            pagination:{
                el:'.swiper-pagination',
                type: 'bullets',
            }
        })
        // 获取最新专辑
        getNewAlbum()
            .then(res =>{
                this.setState({
                    loading: false,
                    newAlbums: res
                })
            })
        // setTimeout(() => {
        //     this.setState({
        //         loading: false
        //     })
        // },3000)
    }
    render(){
        let albums = this.state.newAlbums.map(item => (
            <div className="album-wrapper" key={item.id}>
                <div className="left">
                    <img src={item.img} alt={item.name} width='100%' height='100%'/>
                </div>
                <div className="right">
                    <div className="album-name">
                        {item.name}
                    </div>
                    <div className="singer-name">
                        {item.singer}
                    </div>
                    <div className="public-name">
                        {item.publicTime}
                    </div>
                </div>
            </div>
        ))
        return (
            <div className='musci-recommend'>
                <div className="slider-container">
                    <div className="swiper-wrapper">
                    {
                        this.state.sliderList.map(slider => {
                            return (
                                <div className="swiper-slide" key={slider.id}>
                                    <a href={slider.linkUrl} className='slider-nav'>
                                        <Lazyload height={60}>
                                        <img src={slider.picUrl} alt="" width='100%' height='100%'/>
                                        </Lazyload>
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="album-container">
                    <h1 className="title">最新专辑</h1>
                    <div className="album-list">
                        {albums}
                    </div>
                </div>
                {/* <Loading show={this.state.loading} title='正在加载...'/> */}
            </div>
        )
    }
}

export default Recommend;