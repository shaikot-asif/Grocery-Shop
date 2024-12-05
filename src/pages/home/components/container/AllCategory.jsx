import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCategory } from "../../../../services/category";
import Loading from "../../../../components/shared/Loading";
import NavButton from "../../../../components/shared/Button/NavButton";

const AllCategory = () => {
  const [categoryId, setCategoryId] = useState("");

  const handleCategoryId = (data) => {
    setCategoryId(data);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
  console.log(categoryId, "categoryId");
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-row  justify-center items-center mt-[16px] gap-[24px] ">
          <span onClick={() => handleCategoryId("")}>
            {" "}
            <NavButton
              text={"All"}
              classes={`${
                categoryId === "" && "bg-[#749B3F] !text-white"
              } !border-[#A6A6A6] !text-[#A6A6A6] hover:bg-[#749B3F] hover:!text-white transition-all duration-300`}
            />
          </span>
          {data?.data?.data?.map((item) => (
            <span key={item.id} onClick={() => handleCategoryId(item.id)}>
              <NavButton
                text={item.categoryName}
                classes={` ${
                  item.id === categoryId && "bg-[#749B3F] !text-white"
                } !border-[#A6A6A6] capitalize !text-[#A6A6A6] hover:bg-[#749B3F] hover:!text-white transition-all duration-300`}
              />
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCategory;
