import type { Champion } from "@/@types";
import { usePatchVersionStore } from "@/shared/store/patchVersionStore";
import { useSelectedChampions } from "@/shared/store/useSelectedChampions";

interface ChampListItemProps {
  champ: Champion;
}

function ChampListItem({ champ }: ChampListItemProps) {
  const { version } = usePatchVersionStore();
  const { toggleChampion, isChampionSelected } = useSelectedChampions();
  const isSelected = isChampionSelected(champ.id);

  return (
    <div
      onClick={() => toggleChampion(champ)}
      className={`flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
        isSelected ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.image.full}`}
        alt={champ.name}
        className="w-16 h-16 rounded-full mb-2"
      />
      <h3 className="font-semibold text-center">{champ.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {champ.title}
      </p>
    </div>
  );
}

export default ChampListItem;
