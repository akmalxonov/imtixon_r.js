import React from 'react';
import './footer.scss';
import { FaTelegram, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import paymeLogo from '../../assets/payme.svg';
import clickLogo from '../../assets/click.svg';
import fb from '../../assets/fb.svg';
import tg from '../../assets/tg.svg';
import inst from '../../assets/inst.svg';
import youtube from "../../assets/youtube.svg";

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-box">
                        <h4>Контакты</h4>
                        <p>Call-центр</p>
                        <a href="#">+998-78 555-35-00</a>
                        <p>Эл. почта</p>
                        <a href="#">info@zon.uz</a>
                        <p>График работы</p>
                        <span>
                            <p>В будние</p>
                            <p>с 09:00 до 18:00</p>
                        </span>
                        <span>
                            <p>Суббота</p>
                            <p>с 09:00 до 18:00</p>
                        </span>
                    </div>

                    <div className="center">
                        <div className="social-icons">
                            <h4>Мы в социальных сетях</h4>
                            <div className="grid">
                                <a href="#" className="img">
                                    <img src={tg} alt="" />
                                </a>
                                <a href="#" className="img">
                                    <img src={fb} alt="" />
                                </a>
                                <a href="#" className="img">
                                    <img src={youtube} alt="" />
                                </a>
                                <a href="#" className="img">
                                    <img src={inst} alt="" />
                                </a>
                                
                            </div>
                        </div>
                        <div className="payments">
                            <div className="grid">
                               <a href="#"> <img src={paymeLogo} alt="Payme" /></a>
                               <a href="#"><img src={clickLogo} alt="Click" /></a>
                            </div>
                            <p>Интернет магазин Zon.uz 2017-2024. Все права защищены</p>
                        </div>
                    </div>

                    <div className="footer-box">
                        <h4>Компания</h4>
                        <ul>
                            <li>О нас</li>
                            <li>Реквизиты</li>
                            <li>Контакты</li>
                            <li>Вакансии</li>
                            <li>Карта сайта</li>
                            <li>Публичная оферта</li>
                            <li>Продавайте на Zon.uz</li>
                            <li>Покупать как юрлицо</li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <h4>Помощь</h4>
                        <ul>
                            <li>Вопросы и ответы</li>
                            <li>Условия рассрочки</li>
                            <li>Способы оплаты</li>
                            <li>Доставка</li>
                            <li>Возврат товаров</li>
                            <li>Сервисные центры</li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;