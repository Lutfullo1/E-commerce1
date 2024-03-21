import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategory } from "./service/query/useGetSingleCategory";
import { ProductCard } from "../../components/card/product-card/product-card";

export const Category = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleCategory(slug);
  return (
    <div className="container grid grid-cols-4 gap-3">
      {data?.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
