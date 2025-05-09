import "../shop/shop.scss"
import { Button } from 'antd';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { decrement, deleteProduct, increment } from '../../redux/shopSlice';
import { useDispatch, useSelector } from 'react-redux';


const ShopComponent = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.shop);
    const totalPrice = data.reduce(
        (acc, value) => acc + (value.userPrice || 0), 0
    );



    return (
        <section className="shop">
            <div className="container">
                {data.length ===0 ? (
                    <div className="pusto">
                        <h2>Корзина</h2>
                        <h3>Ваша корзина пусто</h3>
                        <Button onClick={()=>navigate("/")} >На главную</Button>
                    </div>
                ):<div className="wrapper">
                <div className="left">
                    <h2>Корзина</h2>
                    {data.map((value) => (
                        <div className="card-shop" key={value.id}>
                            <div className="top">
                                <div className="img">
                                    <img src={value.img} alt="" />
                                </div>  
                                <div>
                                    <h5>{value.title}</h5>
                                    <h5>{(value.price || 0).toLocaleString()} so'm</h5>
                                </div>
                            </div>
                            <div className="buttom">
                                <div className="count">
                                    <Button onClick={() => dispatch(decrement(value.id))} color="danger" variant="outlined">-</Button>
                                    <p>{value.count}</p>
                                    <Button onClick={() => dispatch(increment(value.id))}>+</Button>
                                </div>
                                <div className="user-price">
                                    <h5>{value.userPrice.toLocaleString()}so'm</h5>
                                </div>
                                <RiDeleteBin6Fill className='delete' onClick={() => dispatch(deleteProduct(value.id))} />
                            </div>
                        </div>
                    ))}

                </div>
                <div className="right">
                    <div className="price">
                        <h2>Итого</h2>
                        <h2>{totalPrice.toLocaleString() || 0}so'm</h2>
                    </div>
                    <div className="price">
                        <h4>Доставка</h4>
                        <h4>бесплатно</h4>
                    </div>
                    <p>Для заказа товаров требуется регистрация. Если вы уже зарегистрированы, войдите в свою учетную запись</p>
                    <Button className='btn'>Заказать</Button>
                    <p>Согласен с условиями <span>Правил пользования торговой площадкой и правилами возврата</span></p>
                </div>
            </div>}
            </div>
        </section>
    );
}

export default ShopComponent;
