import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/reques";

export const useGetLaptop = () => {
  return useQuery({
    queryKey: ["newLaptop"],
    queryFn: () => request.get("/notebook").then((res) => res.data),
  });
};
