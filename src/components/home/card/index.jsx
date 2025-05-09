import '../card/card.scss'
import { Button } from 'antd';
import toast from 'react-hot-toast';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../redux/shopSlice';
import { toggleLike } from '../../../redux/likeSlice';
import { LiaStarSolid } from "react-icons/lia";
import { FaHeart } from 'react-icons/fa';

const Card = (value) => {
    let { id, title, many, price, img } = value
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cardSlice?.data || []);
    const liked = useSelector(state => state.like?.data || []);
    const alreadyInCart = cart.some(item => item.id === id);
    const alreadyLiked = liked.some(item => item.id === id);
    return (
        <div className='card'>
            <div className="img">
                <FaHeart
                    onClick={() => {
                        dispatch(toggleLike(value))
                        console.log("Liked:", liked);
                        console.log("Already Liked?", alreadyLiked);

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
                            dispatch(addProduct((value)))
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
