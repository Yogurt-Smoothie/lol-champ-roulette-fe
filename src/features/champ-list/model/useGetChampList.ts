import { useQuery } from "@tanstack/react-query";
import { fetchChampions } from "./apiChampList";

const useGetChampList = () => {
  return useQuery({
    queryKey: ["champions"],
    queryFn: fetchChampions,
    staleTime: 1000 * 60 * 60, // 1시간 동안 데이터를 신선한 상태로 유지
    gcTime: 1000 * 60 * 60 * 24, // 24시간 동안 캐시 유지
  });
};

export { useGetChampList };
