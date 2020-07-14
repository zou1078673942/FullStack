import React, { Component } from 'react';
import xingqiu from '../../img/3.png'
import dongtai from '../../img/4.png'
import faxian from '../../img/5.png'
import wode from '../../img/6.png'
import { Link } from 'react-router-dom';
class Button extends Component {
    state = {}
    render() {
        return (
            <div className='buttom'>
                <Link to='/' className="buttom-item">
                    <div >
                        <div className='item-img'><img src={xingqiu} alt="" /></div>
                        <div className='item-name'><span>星球</span></div>
                    </div>
                </Link>
                <Link to='/dongtai' className="buttom-item">
                    <div >
                        <div className='item-img'><img src={dongtai} alt="" /></div>
                        <div className='item-name'><span>动态</span></div>
                    </div>
                </Link>
                <Link to='/faxian' className="buttom-item">
                    <div >
                        <div className='item-img'><img src={faxian} alt="" /></div>
                        <div className='item-name'><span>发现</span></div>
                    </div>
                </Link>
                <Link to='/wode' className="buttom-item">
                    <div>
                        <div className='item-img'><img src={wode} alt="" /></div>
                        <div className='item-name'><span >我的</span></div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Button;