import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useGetCatalog } from "../../../../layout/header/service/query/useGetCatalog";
import Slider from "react-slick";

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

export const CategoryBanner = () => {
  const { data, isLoading } = useGetCatalog();
  return (
    <div className="container">
      <div className="mt-[50px]">
        {isLoading ? (
          <Skeleton count={6} height={50} />
        ) : (
          <div className="flex items-center gap-5">
            {data?.map((item, i) => (
              <Link key={i} to={`/category/${item.name}`}>
                <div className="w-[220px] h-[150px] flex items-center gap-[10px] bg-gray-200 p-3">
                  <div className="w-[100px]">
                    <img src={item.img} alt="img" />
                  </div>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
