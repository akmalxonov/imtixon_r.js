    import { useSelector } from 'react-redux';
    import "../liked/liked.scss"
    import Card from '../home/card';

    const Liked = () => {
        const { data } = useSelector((state) => state.like || []);
        return (
            <div className="liked">
                <h2>Yoqtirilgan mahsulotlar</h2>
                {data.length === 0 ? (
                    <p>Hozircha siz hech qanday mahsulotni yoqtirmagansiz.</p>
                ) : (
                    <div className="liked-wrapper">
                        <div className="wrapper">
                            {data.map(item => (
                                <Card key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    export default Liked;