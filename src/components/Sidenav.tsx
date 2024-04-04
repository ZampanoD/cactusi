import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { GiCactusPot } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiMessageEdit } from "react-icons/bi";

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4"> Главная</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <GiCactusPot size={20} />
            <span className="pl-4">Мир кактусов</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <GrGallery size={20} />
            <span className="pl-4">Галерея</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaPeopleGroup size={20} />
            <span className="pl-4"> О нас</span>
          </a>
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <BiMessageEdit size={20} />
            <span className="pl-4"> Связь с нами</span>
          </a>
        </div>
      ) : (
        
        <div></div>
      )}
    </div>
  );
};

export default Sidenav;
