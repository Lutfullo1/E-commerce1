import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/reques";

export const useGetSingleProduct = (slug, id) => {
  return useQuery({
    queryKey: ["single-product", id],
    queryFn: () => request.get(`/${slug}/${id}`).then((res) => res.data),
  });
};
