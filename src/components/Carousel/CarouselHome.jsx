import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.css';
import dataCarousel from '../../data/dataCarousel';

const CarouselHome = () => {
    return (
        <div className="carousel-wrapper">
        <Swiper
            spaceBetween={30}
            navigation
            modules={[Navigation]}
            breakpoints={{
                1110: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
            }}
        >
        {dataCarousel.map((slide) => (
            <SwiperSlide key={slide.id}>
                <div className="slide-content">
                    <img src={slide.image} alt={slide.title} className="slide-img" />
                <div className="text-overlay">
                    <h3>{slide.title}</h3>
                    <p>{slide.text}</p>
                </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
        </div>
    );
}
    
export default CarouselHome;