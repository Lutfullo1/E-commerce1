import React from "react";

export const ProductCard = ({ img, title, rame, color, price, id }) => {
  return (
    <div className="h-[330px] flex flex-col justify-between mb-5">
      <div className="w-[250px]">
        <img src={img} alt="img" />
      </div>
      <div className="text-center">
        <h2>{title}</h2>
        <strong>{price}</strong>
        <div className="flex items-center justify-center gap-2">
          <p>{rame}</p>
          <p>{color}</p>
        </div>
      </div>
    </div>
  );
};
