import axios from "axios";

const getPatchVersion = async (): Promise<string> => {
  const response = await axios.get<string[]>(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );

  return response.data[0]; // 가장 최신 버전은 첫 번째 요소
};

export { getPatchVersion };
