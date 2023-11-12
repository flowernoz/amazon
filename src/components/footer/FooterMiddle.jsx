import React from 'react'
import { middleList } from '../../static/footer';
import FooterMiddleList from './FooterMiddleList';
import   bdFlag  from "../../assets/bdFlag.webp";
import   logo  from "../../assets/logo.png";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon-light_blue text-white">
      {/* ============ Top Start here ================== */}
      <a className='w-[100%] bg-slate-600 flex items-center justify-center h-16 hover:bg-slate-500 ' href="#home">Back to Top</a>
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-4 place-items-center items-start">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className='bg-slate-200 mt-10  h-[0.1px]'/>
      {/* ============ Top End here ==================== */}
      {/* ============ Bottom Start here =============== */}
      <div className="w-full flex gap-6 items-center  justify-center py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
        </div>
        <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
          <img
            className="w-6 bg-amazon-light_blue"
            src={
           '   https://cdn-icons-png.flaticon.com/128/206/206626.png'
            }
            alt="flagImg"
          />
          <p>United States</p>
        </div>
      </div>
      {/* ============ Bottom End here ================= */}
    </div>
  );
}

export default FooterMiddle