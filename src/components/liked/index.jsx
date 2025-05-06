import React, { useContext } from 'react';
import { LikeContext } from '../../context/heart-context';
import "../liked/liked.scss"
import Card from '../home/card';

const Liked = () => {
    const { state, dispatch } = useContext(LikeContext);
    return (
        <div className="liked">
            <h2>Yoqtirilgan mahsulotlar</h2>
            {state.data.length === 0 ? (
                <p>Hozircha siz hech qanday mahsulotni yoqtirmagansiz.</p>
            ) : (
                <div className="liked-wrapper">
                    <div className="wrapper">
                        {state.data.map(item => (
                            <Card key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Liked;