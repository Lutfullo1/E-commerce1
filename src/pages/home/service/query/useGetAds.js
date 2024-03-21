import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/reques";

export const useGetAds = () => {
  return useQuery({
    queryKey: ["ads"],
    queryFn: () => request.get("/ads").then((res) => res.data),
  });
};
