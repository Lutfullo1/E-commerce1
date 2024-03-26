import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategory } from "./service/query/useGetSingleCategory";
import { ProductCard } from "../../components/card/product-card/product-card";
import { useGetCategoryAttribute } from "./service/query/useGetCategoryAttribute";
import { productFilter } from "../../redux/filter-slice";
import { useDispatch, useSelector } from "react-redux";

const GetAttributeData = ({ result }) => {
  const dispatch = useDispatch();
  const changeInput = (e) => {
    dispatch(productFilter({ name: e.target.name, value: e.target.value }));
  };

  let arr = [];
  for (let i in result) {
    if (i !== "id" && i !== "slug") {
      arr.push(
        <div className="border p-4 rounded-md mb-3" key={i}>
          <strong>{i}</strong>
          <form>
            {result[i].map((item) => (
              <div className="flex items-center gap-1" key={item}>
                <input
                  onChange={changeInput}
                  className="cursor-pointer"
                  value={item}
                  type="radio"
                  name={`${i}_like`}
                />
                <label>{item}</label>
              </div>
            ))}
          </form>
        </div>
      );
    }
  }
  return arr;
};

export const Category = () => {
  const { dataAttribute } = useSelector((state) => state.filter);
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleCategory(slug, dataAttribute);
  const { data: attributeData } = useGetCategoryAttribute();
  const result = attributeData?.find((item) => item.slug == slug);
  return (
    <div className="container">
      <div className="flex">
        <div className="grid grid-cols-4 gap-3 flex-grow">
          {data?.map((item) => (
            <ProductCard slug={slug} key={item.id} {...item} />
          ))}
        </div>
        <div className="w-[300px] h-[535px] flex-shrink-0 border p-5 rounded-md">
          {result && (
            <div>
              <GetAttributeData result={result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
