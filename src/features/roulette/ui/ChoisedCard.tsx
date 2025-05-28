import type { Champion } from "@/@types/champion";

function ChoisedCard({ champion }: { champion?: Champion }) {
  return (
    <div
      className={`flex items-center justify-center p-8 rounded-lg bg-white dark:bg-gray-800 shadow-md w-[25vw] h-[15vw] min-w-[255px] min-h-[150px] max-w-[340px] max-h-[200px] relative overflow-hidden ${
        champion ? "border-2 border-blue-200 dark:border-blue-800" : ""
      }`}
    >
      {champion ? (
        <>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
            alt={champion.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="flex flex-col items-center relative z-10 mt-auto">
            <h3 className="font-semibold text-center text-white">
              {champion.name}
            </h3>
          </div>
        </>
      ) : (
        <p className="text-lg font-medium text-center text-gray-600 dark:text-gray-400">
          룰렛을 돌릴 챔피언을 선택해주세요
        </p>
      )}
    </div>
  );
}

export default ChoisedCard;
