import { Link } from "react-router-dom";
import './HomePageCard.css'
const HomePageCard = ({ cardItem }) => {
  return (
    <div className="HomePageCard ">
      {cardItem?.map((item, index) => (
        <Link key={index} className="h-[420px] bg-white z-30 m-3">
          <div className="text-lg xl:text-xl font-semibold ml-4 mt-4">
            {item.title}
          </div>
          <div className="h-[300px] m-4">
            <img
              className="h-[100%] w-[100%] object-cover"
              src={item.img}
              alt="Home card"
            />
          </div>
          <div className="cardLink text-xs xl:text-sm text-blue-400 ml-4 ">
            {item.link}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePageCard;
