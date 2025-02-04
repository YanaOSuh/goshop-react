import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import carouselOne from '../images/carouselOne.jpg';
import carouselTwo from '../images/carouselTwo.jpg';
import carouselThree from '../images/carouselThree.jpg';
import carouselFour from '../images/carouselFour.jpg';
import carouselFive from '../images/carouselFive.jpg';

function CarouselHome() {
    const slides = [
        { image: carouselOne, title: "Summer Vibes", text: "Fresh looks for sunny days" },
        { image: carouselTwo, title: "Urban Fashion", text: "Trendy city wear" },
        { image: carouselThree, title: "Casual", text: "Comfort meets elegance" },
        { image: carouselFour, title: "Sportswear", text: "Stay active in style" },
        { image: carouselFive, title: "Beach mood", text: "Stylish trends" }
    ];

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
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
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