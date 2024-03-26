import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProduct } from "./service/query/useGetSingleProduct";

export const ProductDetail = () => {
  const { slug, id } = useParams();
  const { data, isLoading } = useGetSingleProduct(slug, id);

  return (
    <div className="mr-4 container">
      <div className="flex justify-center items-center">
        <div className="w-[350px]">
          <img className="w-full" src={data?.img} alt="img" />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-7">
            {data?.title.slice(0, 20)}
          </h2>
          <div className="flex text-center items-center justify-center gap-2 mb-5">
            <p className="text-gray-600">{data?.rame}</p>
            <p className="text-gray-600">{data?.color}</p>
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <strong className="text-[24px] text-blue-500">
              {data?.price} $
            </strong>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
