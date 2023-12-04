import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import swiper1 from "../../assets/homecarousel/swiper1.jpg";
import swiper2 from "../../assets/homecarousel/swiper2.jpg";
import swiper3 from "../../assets/homecarousel/swiper3.jpg";
import swiper4 from "../../assets/homecarousel/swiper4.jpg";
import swiper5 from "../../assets/homecarousel/swiper5.jpg";
import "swiper/css";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const carouselImgs = [swiper1, swiper2, swiper3, swiper4, swiper5];
  return (
    <div className="Carousel">
      <Swiper
        loop={true}
        spaceBetween={0}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
      >
        {carouselImgs.map((item, index) => (
          <SwiperSlide key={index}>
            <Link>
              <img className="carouselImg" src={item} alt="Carousel" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="overlay" />
    </div>
  );
};

export default Carousel;
