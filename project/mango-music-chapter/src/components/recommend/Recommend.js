import React from 'react';
import './recommend.styl';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
//  swiper
class Recommend extends React.Component{
    state = {
        sliderList: [{
            id:1,
            picUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592323159415&di=46d97c283505f8585af94821cdc5a55d&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
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
    }
    render(){
        return (
            <div className='musci-recommend'>
                <div className="slider-container">
                    <div className="swiper-wrapper">
                    {
                        this.state.sliderList.map(slider => {
                            return (
                                <div className="swiper-slide" key={slider.id}>
                                    <a href={slider.linkUrl} className='slider-nav'>
                                        <img src={slider.picUrl} alt="" width='100%' height='100%'/>
                                    </a>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default Recommend;