import Featured from "./Components/Featured";
import FeaturedCard from "./Components/FeaturedCard";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import Services from "./Components/Services";
import Survey from "./Components/Survey";


export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <FeaturedCard />
      <Services />
      <Menu />
      <Survey />
    </main>
  );
}