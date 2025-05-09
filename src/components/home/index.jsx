    import React, { useContext } from 'react';
    import { useAxiosGet } from '../../hooks/useAxios';
    import '../home/home.scss'
    import Card from './card';
    import ImageSlider from './swiper';
    const HomeComponent = () => {
        const { data, loading } = useAxiosGet("products");
        return (
            <section className='home'>
                <ImageSlider/>
                <div className="wrapper">
                    {data.map((value) => (
                        <Card key={value.id} {...value}/>
                    ))}
                </div>
            </section>
        );
    }

    export default HomeComponent;
