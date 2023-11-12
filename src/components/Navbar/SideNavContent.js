import React from 'react'
import {HiOutlineChevronRight} from 'react-icons/hi'
const SideNavContent = ({title,one,two,three}) => {
  return (
    <div className="py-3 border-b-[1px] z-50  border-b-slate-700">
      <h3 className="text-lg font-semibold mb-1 px-6">{title}</h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one}
          <span>
            <HiOutlineChevronRight 
             
            />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two}
          <span>
            <HiOutlineChevronRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three}
          <span>
            <HiOutlineChevronRight />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default SideNavContent