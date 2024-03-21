import React from "react";
import { Banner } from "./components/banner/banner";
import { CategoryBanner } from "../../components/ui/sliders/category-banner/category-banner";

export const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryBanner />
    </div>
  );
};
