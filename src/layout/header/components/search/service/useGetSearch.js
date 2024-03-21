import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/reques";

export const useGetSearch = (value) => {
  return useQuery({
    queryKey: ["all", value],
    queryFn: () => {
      if (value.length) {
        return request
          .get("/all", {
            params: { title_like: value },
          })
          .then((res) => res.data);
      }
      return;
    },
  });
};
