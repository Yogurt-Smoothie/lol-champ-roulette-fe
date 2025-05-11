import type { Champion } from "@/@types";
import { useGetChampList } from "../model/useChampList";
import ChampListItem from "./ChampListItem";

function ChampList() {
  const { data: champions, isLoading, error } = useGetChampList();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg">챔피언 목록을 불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-lg text-red-500">
          챔피언 목록을 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {champions?.map((champ: Champion) => (
          <ChampListItem key={champ.id} champ={champ} />
        ))}
      </div>
    </div>
  );
}

export default ChampList;
