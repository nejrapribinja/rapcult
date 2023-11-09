import Benefits from "@/components/Benefits";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-secondary  mx-auto">
      <HomePage />
      <Benefits />
    </main>
  );
}
