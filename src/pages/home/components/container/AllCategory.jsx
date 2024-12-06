import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";
import { getCategory } from "../../../../services/category";
import Loading from "../../../../components/shared/Loading";
import NavButton from "../../../../components/shared/Button/NavButton";
import { getProducts } from "../../../../services/product";
import ProductCard from "./ProductCard";

const AllCategory = () => {
  const [categoryId, setCategoryId] = useState("");
  const [selectedCategorysProduct, setSelectedCategorysProduct] = useState([]);

  const handleCategoryId = (data) => {
    setCategoryId(data);
  };

  const { data: category, isLoading: categoryLoading } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const categorizedProducts = useMemo(() => {
    if (categoryId === "") {
      return products?.data?.data;
    } else {
      return products?.data?.data?.filter(
        (item) => item.categoryId === categoryId
      );
    }
  }, [categoryId, products]);

  useEffect(() => {
    setSelectedCategorysProduct(categorizedProducts);
  }, [categorizedProducts, categoryId]);

  return (
    <div>
      {categoryLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-row  justify-center items-center mt-[16px] gap-[12px] md:gap-[24px] ">
          <span onClick={() => handleCategoryId("")}>
            {" "}
            <NavButton
              text={"All"}
              classes={`${
                categoryId === "" && "bg-[#749B3F] !text-white"
              } !border-[#A6A6A6] text-[12px] py-[8px] px-[12px]  md:rounded-[8px] !text-[#A6A6A6] hover:bg-[#749B3F] hover:!text-white transition-all duration-300`}
            />
          </span>
          {category?.data?.data?.map((item) => (
            <span key={item.id} onClick={() => handleCategoryId(item.id)}>
              <NavButton
                text={item.categoryName}
                classes={` ${
                  item.id === categoryId && "bg-[#749B3F] !text-white"
                } !border-[#A6A6A6] text-[12px]  py-[8px] px-[4px]  md:rounded-[8px] capitalize !text-[#A6A6A6] hover:bg-[#749B3F] hover:!text-white transition-all duration-300`}
              />
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-evenly gap-5 mt-[32px] ">
        {selectedCategorysProduct?.slice(0, 8).map((item) => (
          <ProductCard
            key={item.id}
            photo={item.images[0]}
            money={item.price}
            name={item.productName}
          />
        ))}
      </div>

      <NavButton
        classes={
          "text-primary-orange border-primary-orange rounded-[8px] mt-[32px] hover:bg-primary-orange hover:text-white transition-all duration-300 "
        }
        text={"All Products"}
      />
    </div>
  );
};

export default AllCategory;
