import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../constants/Images";
import Paragraph1 from "./shared/Paragraph1";
import NavButton from "./shared/Button/NavButton";

const navItem = [
  { name: "Home", path: "/" },
  { name: "shop", path: "/shop" },
  { name: "About Us", path: "/about-us" },
  { name: "blog", path: "/blog" },
];

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className=" max-w-[1439px] h-[100px]  m-auto bg-transparent relative z-40 ">
      <div className=" px-2 lg:px-[8.34%] flex justify-between items-center h-full m-auto">
        <Link
          className="inline-flex w-[181px] md:w-[224.34px] items-center gap-[9.75px] "
          to={"/"}
        >
          <img src={images.logo} alt="" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center justify-center gap-10 xl:gap-16 ">
            {navItem?.map((item) => (
              <li key={item.name}>
                {" "}
                <Link
                  className="font-questrial text-sm leading-[24px] [letter-spacing: -0.28px] text-[#4A4A52] "
                  to={item.path}
                >
                  {item.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:inline-flex items-center gap-[19px] ">
          <button className="flex justify-start items-center gap-[8px] ">
            <img className="w-[24px] h-[24px] " src={images.Heart} alt="" />
            <Paragraph1 classes={"text-white"} text={"Favorites"} />
          </button>
          <button className="flex justify-start items-center gap-[8px] ">
            <div className="relative">
              <img
                className="w-[24px] h-[24px] [mask-image:radial-gradient(circle_at_top_right,_transparent_10px,_black_11px)] "
                src={images.cart}
                alt=""
              />
              <span className="absolute bg-red-600 h-[16px] text-[12px] rounded-full justify-center w-[16px] flex px-[4px] items-center  -right-2 -top-2 ">
                0
              </span>
            </div>
            <Paragraph1 classes={"text-white"} text={"Cart"} />
          </button>
          <NavButton text={"Sign in"} />
        </div>

        <div className=" lg:hidden self-center flex flex-row gap-6 justify-center items-center ">
          <div className="relative">
            <img
              className="w-[24px] h-[24px] [mask-image:radial-gradient(circle_at_top_right,_transparent_10px,_black_11px)] "
              src={images.cart}
              alt=""
            />
            <span className="absolute bg-red-600 h-[16px] text-[12px] rounded-full justify-center w-[16px] flex px-[4px] items-center  -right-2 -top-2 ">
              0
            </span>
          </div>
          <span onClick={() => setIsMenu(!isMenu)}>
            <img src={images.navBar} alt="" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
