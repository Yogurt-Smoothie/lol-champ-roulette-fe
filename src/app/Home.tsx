import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import Roulette from "@/features/roulette/ui/Roulette";
import ChampList from "@/features/champ-list/ui/ChampList";

function Home() {
  return (
    <div>
      <Header />
      <Roulette />
      <ChampList />
      <Footer />
    </div>
  );
}

export default Home;
