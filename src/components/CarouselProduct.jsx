import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const CarouselProduct = ({ data, title }) => {
  return (
    <div className="bg-white pb-4 m-3 ">
      <div className="text-2xl font-semibold p-3">{title}</div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#333",
          "--swiper-navigation-background-color": "#000",
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((img, i) => (
          <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
              <img className="mb-4" src={img} alt="Carousel product" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
