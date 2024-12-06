import React from "react";
import NavButton from "../../../../components/shared/Button/NavButton";

const ProductCard = ({ classes, photo, name, money }) => {
  return (
    <div
      className={`${classes} group  w-[282px] h-[360px] rounded-[20px] p-[12px] shadow-md`}
    >
      <div className="w-[258px] h-[208px] bg-[#F4F6F6] mb-[12px] rounded-[20px] flex justify-center items-center ">
        <img src={photo} className="w-[200px] h-[200px]" alt={name} />
      </div>

      <div className="flex flex-col justify-center items-center gap-[8px] ">
        <h3 className="font-rubik font-semibold text-[18px] ">{name}</h3>
        <p className="text-[#4A4A52] mb-[4px]">${money}/kg</p>

        <span>
          <NavButton
            classes={
              "!border-[#A6A6A6] py-[12px] px-[24px] rounded-[8px] group-hover:!border-primary-orange w-full !text-black group-hover:bg-primary-orange group-hover:shadow-lg group-hover:!text-white transition-all duration-300"
            }
            text={"Add to cart"}
          />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
