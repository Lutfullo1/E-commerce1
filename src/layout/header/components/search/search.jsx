import React from "react";
import { useGetSearch } from "./service/useGetSearch";
import useDebounce from "../../../../hooks/useDebounse";
import { ProductCard } from "../../../../components/card/product-card/product-card";
import Skeleton from "react-loading-skeleton";

export const Search = ({ input, setInput }) => {
  return (
    <div>
      <div>
        <input
          className="w-[673px] border p-4 py-3 outline-none"
          type="text"
          placeholder="Поиск"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    </div>
  );
};
