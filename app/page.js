import AboutRapcult from "@/components/AboutRapcult";
import Benefits from "@/components/Benefits";
import HomePage from "@/components/HomePage";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <main className=" bg-secondary">
      <HomePage />
      <Benefits />
      <HowItWorks />
      <Packages />
      <SuccessStories />
      <AboutRapcult />
    </main>
  );
}
