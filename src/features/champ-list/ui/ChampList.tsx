import { useGetChampList } from "../model/useChampList";
import type { Champion } from "@/@types";

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
          <div
            key={champ.id}
            className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.9.1/img/champion/${champ.image.full}`}
              alt={champ.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <h3 className="font-semibold text-center">{champ.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              {champ.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChampList;
