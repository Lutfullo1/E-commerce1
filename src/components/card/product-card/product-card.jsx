import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  img,
  title,
  color,
  price,
  id,
  slug,
  attribute,
}) => {
  return (
    <div className="mr-4">
      <div className="rounded-lg overflow-hidden mb-4 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
        <img className="w-full" src={img} alt="img" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            <Link to={`/product/${slug}/${id}`}>{title.slice(0, 20)}</Link>
          </h2>
          <div className="text-center flex flex-col items-center mb-2">
            <p className="text-gray-600">{color}</p>
            <strong>{attribute}</strong>
          </div>
          <div className="flex items-center justify-between">
            <strong className="text-lg text-blue-500">{price}</strong>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
