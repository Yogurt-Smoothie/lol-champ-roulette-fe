import { useSelectedChampions } from "@/shared/store/useSelectedChampions";
import { Button } from "@/shared/components/ui/button";
import ChoisedCard from "./ChoisedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";

function Roulette() {
  const { selectedChampions, clearChampions } = useSelectedChampions();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-4 mb-8 mt-8 relative">
        {selectedChampions.length === 0 ? (
          <div className="flex justify-center w-full">
            <ChoisedCard />
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent
              className={`${
                selectedChampions.length <= 2 ? "flex justify-center" : ""
              }`}
            >
              {selectedChampions.map((champion) => (
                <CarouselItem
                  key={champion.id}
                  className="flex flex-col items-center basis-full lg:basis-1/3"
                >
                  <ChoisedCard champion={champion} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <Button
          onClick={clearChampions}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
        >
          선택 초기화
        </Button>
        <Button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
          룰렛 돌리기
        </Button>
      </div>
    </div>
  );
}

export default Roulette;
