import HeroSectionHomePage from "../components/HeroSectionHomepage";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer"
import { useScrollTop } from "../hooks/useScrollTop";

const HomePage = () => {
  useScrollTop();
  return (
    <div>
      <HeroSectionHomePage />
      <CardSection />
      <Footer />
    </div>
  );
};

export default HomePage;
