import { useQuery } from "@tanstack/react-query";
import { getPatchVersion } from "../api/apiPatchVersion";
import { queryKeys } from "@/constants/queryKeys";
import { usePatchVersionStore } from "../store/patchVersionStore";
import { useEffect } from "react";

const useGetPatchVersion = () => {
  const { setVersion } = usePatchVersionStore();

  const query = useQuery({
    queryKey: queryKeys.latestVersion,
    queryFn: getPatchVersion,
    staleTime: 1000 * 60 * 60 * 24, // 하루 동안 캐시
    refetchInterval: 1000 * 60 * 60 * 24, // 하루마다 자동 갱신
    refetchOnWindowFocus: false, // 탭 복귀 시 재요청 비활성화
  });

  useEffect(() => {
    if (query.data) {
      setVersion(query.data);
    }
  }, [query.data, setVersion]);

  return query;
};

export { useGetPatchVersion };
