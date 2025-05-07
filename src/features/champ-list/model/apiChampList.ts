import axios from "axios";
import type { Champion } from "@/@types";
import { patchVersionStore } from "@/shared/store/patchVersionStore";

interface ChampionData {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
}

const fetchChampions = async (): Promise<Champion[]> => {
  const version = patchVersionStore.getState().version;

  const { data } = await axios.get<ChampionData>(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`
  );

  return Object.values(data.data).map((champion) => ({
    id: champion.id,
    key: champion.key,
    name: champion.name,
    title: champion.title,
    image: champion.image,
  }));
};

export { fetchChampions };
