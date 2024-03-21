import React from "react";
import { useGetAds } from "../../../pages/home/service/query/useGetAds";

export const Ads = () => {
  const { data, isLoading } = useGetAds("ads");
  return (
    <div className="bg-blue-400">
      <div className="container pt-3">
        <p className="text-[24px] font-[600] mb-[20px]">Акции</p>
        <div className="flex items-center justify-between p-[30px]">
          {data?.map((item) => (
            <div key={item.id} className="w-[430px] ">
              <img className="h-[250px]" src={item.img} alt="img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
