import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import ChampList from "@/features/champ-list/ui/ChampList";

function Home() {
  return (
    <div>
      <Header />
      <ChampList />
      <Footer />
    </div>
  );
}

export default Home;
