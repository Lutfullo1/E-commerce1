import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/reques";

export const useGetBrands = () => {
  return useQuery({
    queryKey: ["brand"],
    queryFn: () => request.get("/brand").then((res) => res.data),
  });
};
