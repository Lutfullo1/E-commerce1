import React from "react";

export const ProductCard = ({ img, title, rame, color, price, id }) => {
  return (
    <div className="mr-4">
      <div className="rounded-lg shadow-lg overflow-hidden mb-4 hover:shadow-xl transition duration-300">
        <img className="w-full" src={img} alt="img" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <div className="flex items-center justify-between mb-2">
            <p className="text-gray-600">{rame}</p>
            <p className="text-gray-600">{color}</p>
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
