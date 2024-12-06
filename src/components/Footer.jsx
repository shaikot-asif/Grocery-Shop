import React from "react";
import images from "../constants/Images";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-[1440px]  text-center block m-auto  w-full px-4 lg:px-[8.33%] overflow-hidden">
        <div className="flex lg:flex-row flex-col justify-between lg:gap-5 ">
          <div className="w-[297px] mb-4">
            <img src={images.logo} className="w-full" alt="" />
          </div>

          <div className="flex justify-between w-full lg:w-[756px] ">
            <div className=" w-[75px] md:w-[115px]">
              <h2 className=" font-rubik font-semibold text-[12px] md:text-[18px] text-[#212337] mb-4">
                Quick links 1
              </h2>
              <ul className="text-left text-[12px] md:text-[14px]  ">
                <li className=" text-[#4A4A52] pb-[12px] cursor-pointer">
                  Home
                </li>
                <li className=" text-[#4A4A52] pb-[12px] cursor-pointer">
                  Shop
                </li>
                <li className="  text-[#4A4A52] pb-[12px] cursor-pointer">
                  About us
                </li>
                <li className="  text-[#4A4A52] pb-[12px] cursor-pointer">
                  Blog
                </li>
                <li className=" ttext-[#4A4A52]  cursor-pointer">
                  Detail Blog
                </li>
              </ul>
            </div>

            <div className=" w-[75px] md:w-[115px]">
              <h2 className=" font-rubik font-semibold text-[12px] md:text-[18px] text-[#212337] mb-4">
                Quick links 2
              </h2>
              <ul className="text-left text-gray-600 text-[12px]  md:text-[14px] ">
                <li className=" text-[#4A4A52] pb-[12px] cursor-pointer">
                  Favorites
                </li>
                <li className=" text-[#4A4A52] pb-[12px] cursor-pointer">
                  Cart
                </li>
                <li className=" text-[#4A4A52] pb-[12px] cursor-pointer">
                  Sign in
                </li>
                <li className=" text-[#4A4A52]  cursor-pointer">Register</li>
              </ul>
            </div>

            <div className=" w-[176px] md:w-[269px]">
              <h2 className=" font-rubik font-semibold text-left text-[12px] md:text-[18px] text-[#212337] mb-4">
                Contact Us
              </h2>
              <ul className="text-[12px] flex flex-col gap-[12px] text-[#4A4A52] ">
                <li className="flex items-center text-left ">
                  <span className="w-[15px] h-[15px]">
                    <img src={images.call} className="w-full h-full" alt="" />
                  </span>
                  <span>1234 5678 90</span>
                </li>
                <li className="flex items-center text-left ">
                  <span className="w-[15px] h-[15px]">
                    <img src={images.email} className="w-full h-full" alt="" />
                  </span>
                  <span>Freshharvests@gmail.com</span>
                </li>
                <li className="flex items-center text-left ">
                  <span className="w-[15px] h-[15px]">
                    <img
                      src={images.location}
                      className="w-full h-full"
                      alt=""
                    />
                  </span>
                  <span>Tanjung Sari Street, Pontianak, Indonesia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse justify-between mt-5 lg:mt-[-20px] ">
          <div className="flex flex-col  mt-2">
            <p className="font-semibold text-left mb-4 text-[12px] font-rubik text-[#212337] ">
              Accepted Payment Methods:
            </p>
            <div className="flex gap-[20px] ">
              <img src={images.visa} alt="Google Play" />
              <img src={images.paypal} alt="App Store" />
              <img src={images.pay} alt="App Store" />
            </div>
          </div>
          <div className=" mt-[16px] md:mt-0 ">
            <p className="font-semibold text-left mb-4 text-[12px] font-rubik text-[#212337] ">
              Download App:
            </p>
            <div className="flex gap-[20px] ">
              <img
                src={images.googleplay}
                alt="Google Play"
                className="w-28 h-auto cursor-pointer"
              />
              <img
                src={images.appsStore}
                alt="App Store"
                className="w-28 h-auto cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 flex flex-col-reverse gap-6 md:flex-row items-center justify-between">
          <p className="text-[#212337] font-semibold text-sm">
            &copy; Copyright 2024, All Rights Reserved by Banana Studio
          </p>
          <div className="flex gap-[11px] mt-4 md:mt-0">
            <span>
              <img src={images.t} alt="twitter" className="" />
            </span>
            <span>
              <img src={images.f} alt="fb" className="" />
            </span>
            <span>
              <img src={images.i} alt="ig" className="" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
