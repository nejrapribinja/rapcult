import Benefits from "@/components/Benefits";
import HomePage from "@/components/HomePage";
import HowItWorks from "@/components/HowItWorks";
import Packages from "@/components/Packages";
import SuccessStories from "@/components/SuccessStories";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary  mx-auto">
      <HomePage />
      <Benefits />
      <HowItWorks />
      <Packages />
      <SuccessStories />
    </main>
  );
}
