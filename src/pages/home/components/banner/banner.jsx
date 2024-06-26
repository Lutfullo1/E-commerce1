import React from "react";
import Slider from "react-slick";
import { useGetBanner } from "../../service/query/useGetBanner";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "38px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "38px",
        zIndex: "49",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinte: true,
  speed: 500,
  slideToShow: 1,
  autoplay: true,
  slideToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Banner = () => {
  const { data, isLoading } = useGetBanner();
  return (
    <div className="my-[20px]">
      <Slider {...settings}>
        {data?.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
