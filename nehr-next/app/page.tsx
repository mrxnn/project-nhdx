import { HeroSection } from "@/modules/home-hero";
import { NavBar } from "@/modules/nav-bar";

export default function Home() {
  return (
    <div className="lg:px-40">
      <NavBar />
      <HeroSection />
    </div>
  );
}
