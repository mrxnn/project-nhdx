import { Footer } from "@/modules/footer";
import { HeroSection } from "@/modules/home-hero";
import { NavBar } from "@/modules/nav-bar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}
