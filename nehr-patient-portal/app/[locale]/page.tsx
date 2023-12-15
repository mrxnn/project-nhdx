import { Footer } from "@/modules/footer";
import { HeroSection } from "@/modules/home-hero";
import { NavBar } from "@/modules/nav-bar";

const Home = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
