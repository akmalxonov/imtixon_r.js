import React, { useContext, useState } from 'react';
import '../card/card.scss'
import { Button } from 'antd';
import { ShopContext } from '../../../context/shop-context';
import toast from 'react-hot-toast';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { LiaStarSolid } from "react-icons/lia";
import { FaHeart } from 'react-icons/fa';
import { LikeContext } from '../../../context/heart-context';
const Card = (value) => {
    let { id, title, many, price, img } = value
    const { state: cartState, dispatch: cartDispatch } = useContext(ShopContext);
    const { state: likeState, dispatch: likeDispatch } = useContext(LikeContext);
    const alreadyInCart = cartState.data.some(item => item.id === id);
    // const [liked, setLiked] = useState(false);
    const alreadyLiked = likeState.data.some(item => item.id === id);
    return (
        <div className='card'>
            <div className="img">
                <FaHeart
                    onClick={() => {
                        likeDispatch({ type: "toggle_like", data: value })
                    }}
                    className={`heart ${alreadyLiked ? 'liked' : ''}`}
                />
                <img src={img} alt="" />
            </div>
            <div className="info">
                <h5 className='title'>{title}</h5>
                <span className='many'>
                    {many ? <><LiaStarSolid className='star' /><LiaStarSolid className='star' /><LiaStarSolid className='star' /><LiaStarSolid className='star' /><LiaStarSolid className='star' /> </> : <span className='no'>Нет в наличии</span>}
                </span>
                <div className="bottom">
                    <h5 className='price'>{price.toLocaleString()}so'm</h5>
                    <Button shape="circle" disabled={alreadyInCart} onClick={() => {
                        if (many) {
                            cartDispatch({ type: "add_product", data: value })
                            toast.success("savatga qoshildi!")
                            return;
                        }
                        toast.error("Mahsulot qolmagan!");
                    }} className='btn'> {many ? <MdOutlineAddShoppingCart className='icon' /> : <MdOutlineRemoveShoppingCart className='icon2' />}</Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
