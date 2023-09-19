import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";

const TopNav = () => {
  return (
    <div className="max-w-[1520] mx-auto flex justify-between items-center shop">
      <div className="flex item-scenter">
        <div className="cursor-pointer">
          <AiOutlineMenu size={25} />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Yummy</h1>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
