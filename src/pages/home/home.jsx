import React from "react";
import { Banner } from "./components/banner/banner";
import { CategoryBanner } from "../../components/ui/sliders/category-banner/category-banner";
import { useGetNewProducts } from "./service/query/useGetNewProducts";
import { ProductBanner } from "../../components/ui/sliders/product-banner/product-banner";
import { ProductCard } from "../../components/card/product-card/product-card";
import { Ads } from "../../components/banners/ads/ads";

export const Home = () => {
  const { data, isLoading } = useGetNewProducts("phones");
  const { data: data2, isLoading: isLoading2 } = useGetNewProducts("notebook");
  return (
    <div>
      <Banner />
      <CategoryBanner />
      <div className="container mt-8">
        <p className="text-[24px] font-[600] mb-4">Смартфоны и планшеты</p>
        <ProductBanner>
          {data?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductBanner>
      </div>
      <Ads />
      {/* ------------------------------------------------ */}

      {/* -------------------------------------------------------- */}
      <div className="container mt-8">
        <p className="text-[24px] font-[600] mb-4">Смартфоны и планшеты</p>
        <ProductBanner>
          {data?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductBanner>
      </div>
      <div className="container mt-8">
        <p className="text-[24px] font-[600] mb-4">
          Ноутбуки, планшеты и компьютеры
        </p>
        <ProductBanner>
          {data2?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </ProductBanner>
      </div>
    </div>
  );
};
