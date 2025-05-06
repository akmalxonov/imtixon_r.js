import React, { useContext } from 'react';
import logo from "../../assets/Link.svg"
import katalog from "../../assets/nav-katalog.svg"
import world from "../../assets/Img.svg"
import link from "../../assets/link3.svg"
import link2 from "../../assets/link1.svg"
import icon from "../../assets/icon.svg"
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon4 from "../../assets/icon4.svg"
import { Badge, Button, Space } from 'antd';
import { Heart } from 'lucide-react';
import "../navbar/navbar.scss"
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import { FaCartShopping } from 'react-icons/fa6';
import { LikeContext } from '../../context/heart-context';
const Navbar = () => {
    const { state: cartState } = useContext(ShopContext)
    const { state: likeState } = useContext(LikeContext)
    const navigate = useNavigate()
    return (
        <>
            <header className='navbar'>
                <div className="container">
                    <div className="wrapper-top">
                        <div className="top-right">
                            <a href="#">
                                <span className='img'>
                                    <img src={icon1} alt="" />
                                </span>
                                Город
                                <span className='tashkent'>Ташкент</span>
                            </a>
                            <a href="#">
                                <span className='img'>
                                    <img src={icon} alt="" />
                                </span>
                                Продавайтена Zon.uz
                            </a>
                            <a href="#">
                                <span className='img'>
                                    <img src={icon2} alt="" />
                                </span>
                                <span>Покупать как юрлицо</span>
                            </a>
                            <a href="#">Помощь</a>
                            <a href="#">Контакты</a>
                        </div>
                        <div className="top-left">
                            <a href="number">
                                <span>
                                    <img src={icon4} alt="" />
                                </span>
                                +998-78 555-35-00
                            </a>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="logo" onClick={() => navigate("/")}>
                            <img src={logo} alt="" />
                        </div>
                        <div className="canter">
                            <img src={katalog} alt="" />
                            <Space className='input' direction="vertical">
                                <Search placeholder="input search text" allowClear size="large" />
                            </Space>
                        </div>
                        <div className="left">
                            <span onClick={() => navigate("/shop")}>
                                <Badge count={cartState.data.length}>
                                    <FaCartShopping className='icon' />
                                </Badge>
                            </span>
                            <span onClick={() => navigate("/like")}>
                                <Badge count={likeState.data.length}>
                                    <Heart className='icon' />
                                </Badge>
                            </span>
                            <span>
                                <img src={world} alt="" />
                                RU
                            </span>
                            <span>
                                <img src={link} alt="" />
                            </span>
                            <span>
                                <img src={link2} alt="" />
                            </span>
                            <Button type="primary">Войти</Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
