import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/reques";

export const useGetCategoryAttribute = () => {
  return useQuery({
    queryKey: ["attribute"],
    queryFn: () => request.get("/category_attribute").then((res) => res.data),
  });
};
