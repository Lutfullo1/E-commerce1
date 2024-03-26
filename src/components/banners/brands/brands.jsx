import React from "react";
import { useGetBrands } from "../../../pages/home/service/query/useGetBrands";

export const Brands = () => {
  const { data, isLoading } = useGetBrands("brand");
  return (
    <div className="container pt-3 mt-9">
      <p className="text-[24px] font-[600] mb-[20px]">Популярные бренды</p>
      <div className="grid grid-cols-5 gap-5">
        {data?.map((item) => (
          <div
            className="w-[250px] border rounded-md flex items-center justify-center p-4 bg-gray-300"
            key={item.id}
          >
            <img src={item.img} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};
