import React from "react";
import { Banner } from "./components/banner/banner";
import { CategoryBanner } from "../../components/ui/sliders/category-banner/category-banner";
import { useGetNewProducts } from "./service/query/useGetNewProducts";
import { ProductBanner } from "../../components/ui/sliders/product-banner/product-banner";
import { ProductCard } from "../../components/card/product-card/product-card";
import { Ads } from "../../components/banners/ads/ads";
import { useGetLaptop } from "./service/query/useGetLaptop";

export const Home = () => {
  const { data: phones, isLoading: isLoadingPhones } =
    useGetNewProducts("phones");
  const { data: laptop, isLoading: isLoadingLaptop } = useGetLaptop("notebook");

  return (
    <div>
      <Banner />
      <CategoryBanner />
      <div className="container mt-8">
        <p className="text-[24px] font-[600] mb-4">Смартфоны и планшеты</p>
        <ProductBanner>
          {phones?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductBanner>
      </div>
      <Ads />
      {/* ------------------------------------------------ */}
      <div className="container flex justify-center gap-[50px] mt-8">
        <div>
          <p className="text-[24px] font-[600] mb-4">Смартфоны и планшеты</p>
          <div className="border-t-2 pt-4">
            {phones?.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div>
                  <img className="w-[150px]" src={item.img} alt="" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <strong>{item.price}</strong>
                  <p>{item.rame}</p>
                  <p>{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[24px] font-[600] mb-4">
            Ноутбуки, планшеты и компьютеры
          </p>
          <div className="border-t-2 pt-4">
            {laptop?.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div>
                  <img className="w-[150px]" src={item.img} alt="" />
                </div>
                <div className="w-[250px]">
                  <h2>{item.title}</h2>
                  <strong>{item.price}</strong>
                  <p>{item.rame}</p>
                  <p>{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[24px] font-[600] mb-4">Смартфоны и планшеты</p>
          <div className="border-t-2 pt-4">
            {phones?.slice(0, 3).map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div>
                  <img className="w-[150px]" src={item.img} alt="" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <strong>{item.price}</strong>
                  <p>{item.rame}</p>
                  <p>{item.color}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* -------------------------------------------------------- */}
      <div className="container mt-8">
        <p className="text-[24px] font-[600] mb-4">Смартфоны и планшеты</p>
        <ProductBanner>
          {phones?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductBanner>
      </div>
      <div className="container mt-8">
        <p className="text-[24px] font-[600] mb-4">
          Ноутбуки, планшеты и компьютеры
        </p>
        <ProductBanner>
          {laptop?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductBanner>
      </div>
    </div>
  );
};
