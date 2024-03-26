import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/reques";

export const useGetNewProducts = (slug) => {
  return useQuery({
    queryKey: ["newProduct"],
    queryFn: () =>
      request
        .get(`/${slug}`, { params: { _limit: 8 } })
        .then((res) => res.data),
  });
};
