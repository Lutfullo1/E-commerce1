import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "../../service/query/useGetBanner";

const settings = {
  dots: true,
};

export const Banner = () => {
  const { data, isLoading } = useGetBanner();
  return (
    <Slider {...settings}>
      {data?.map((item) => (
        <div>
          <img src={item.img} alt="img" />
        </div>
      ))}
    </Slider>
  );
};
