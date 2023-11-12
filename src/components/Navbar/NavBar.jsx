import { RiShoppingCartLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Search } from "..";
import { HiChevronDown } from "react-icons/hi";


import SideNavContent from "./SideNavContent";
import "./navbar.css";
const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  let name =
    JSON.parse(localStorage.getItem("user"))?.username.charAt().toUpperCase()+JSON.parse(localStorage.getItem("user"))?.username.slice(1)
  const [sidebar, setsidebar] = useState(false);
  sidebar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");
  return (
    <header id="home" className=" navbar">
      <div className="flex bg-amazon   text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link className="logo" to={"/"}>
            <img
              className="h-[32px] w-[100px] m-2"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
          <button className="pr-4 pl-4 location">
            <CiLocationOn className="text-3xl font-bold pb-1" />
            <div className="font-bold  text-sm flex-col items-start">
              <small className=" text-slate-300 font-light">Deliver to</small>
              <br /> <p>Uzbekistan</p>
            </div>
          </button>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <Link to={"/user"} className="pr-4 pl-4 flex-col items-start signing">
            <div className="overlay"></div>
            <small className="text-xs ">Hello, {name ? name : "sign in"}</small>
            <p className="text-xs xl:text-base font-bold">
              Accounts & Lists
            </p>
          </Link>
          <Link className="pr-4 pl-4 flex-col items-start">
            <small className="text-xs ">Returns</small>
            <p className=" text-1xs font-bold">& Orders</p>
          </Link>
          <Link className="basket" to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <RiShoppingCartLine className="h-[44px] text-5xl" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                  {cart}
                </div>
              </div>
              <div className="mt-6 text-2xs font-bold">Cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazon-light_blue text-white space-x-4 text-sm  pl-6">
        <button className="All flex gap-2 items-center">
          <FaBars className="faBars" onClick={() => setsidebar(true)} />
          All
        </button>
        <NavLink>Today's Deals</NavLink>
        <NavLink>Buy Again</NavLink>
        <NavLink>Customer Service</NavLink>
        <NavLink>Registry</NavLink>
        <NavLink>Gift Cards</NavLink>
        <NavLink>Sell</NavLink>
      </div>
      {sidebar && (
        <div className="w-full h-full text-black fixed  top-0 left-0 bg-amazon-light_blue z-50 bg-opacity-70">
          <div className="w-full h-full overflow-y-scroll relative">
            <div className="w-[350px] h-auto bg-white border border-black">
              <div className="w-[350px] h-[60px] bg-amazon-light_blue fixed  text-white py-2 px-6 flex items-center gap-4">
                <FaUserCircle className="text-2xl" />
                <h3 className=" font-bold text-lg tracking-wide ">
                  Hello, {name ? name : "Sign In"}
                </h3>
              </div>
              <div className="pt-16">
                <SideNavContent
                  title="Digital Content & Devices"
                  one="Amazon Music"
                  two="Kindle E-readers & Books"
                  three="Amazon Appstore"
                />
              </div>
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                onClick={() => setsidebar(false)}
                className="cursor-pointer  top-0 font-[900]  left-[350px] w-14 h-[60px]  flex items-center justify-center border bg-opacity-50 fixed"
              >
                <AiOutlineClose z={66} className="text-white text-3xl" />
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
