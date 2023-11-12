import { HomePageCard, CarouselProduct } from "./";
import books, { electronics, kiyim } from "../static/carouselimgs";
import Carousel from "./HomeCarousel/Carousel";
import data from "../static/category";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  const book = books;
  const electronic = electronics;
  const kiyimlar = kiyim;
  let [cart, setCart] = useState(data.slice(0,8));
  let [cart1, setCart1] = useState(data.slice(8,12));
  return (
    <div className="bg-amazon-background ">
      <Carousel />
      <HomePageCard cardItem={cart} />
      <div className="mb-72 mt-80 translate-y-64  w-[96%] mx-auto bg-white">
        <CarouselProduct data={book} title={"Best Sellers in Books"} />
      </div>
      <div className="mb-7 w-[96%] mx-auto bg-white">
        <CarouselProduct data={electronic} title={"Exciting deals"} />
      </div>
      <div className="mb-20 w-[96%] mx-auto bg-white">
        <CarouselProduct data={kiyimlar} title={"Deals under $25"} />
      </div>
      <div >
      {/* <HomePageCard cardItem={cart1} /> */}
      </div>
    </div>
  );
};

export default HomePage;
