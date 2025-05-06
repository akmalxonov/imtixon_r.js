import React from 'react';
import "../swiper/swiper.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
const images = ["https://zon.uz/_next/static/media/inverter_protech-desktop.f5a74588.webp", "https://zon.uz/_next/static/media/crown-desk.6b1b7d10.webp", "https://zon.uz/_next/static/media/resanta-desk.d0ae6da5.webp", "https://zon.uz/_next/static/media/med-texnika.ce3e7d78.webp"]
const ImageSlider = () => {
    return (
      <div style={{ position: 'relative' }}>
        <Swiper
          className="swiper"
          modules={[Pagination, Navigation, Autoplay]} // Modullar
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000 }}
          style={{ height: '434px' }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} // Burchaklarni radiusli qilish
              />
            </SwiperSlide>
          ))}
        </Swiper>
  
        {/* Custom navigation buttons */}
        <div className="custom-navigation">
          <button className="swiper-button-prev-custom" ><FaAngleLeft className='angle' /></button>
          <button className="swiper-button-next-custom" ><FaAngleRight className='angle'  /></button>
        </div>
      </div>
    );
  };
  
  export default ImageSlider;