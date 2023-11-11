"use client";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const HomePage = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-center sm:text-7xl font-bold uppercase">
          Dominate the industry
          <br /> with Rapcult
        </h1>
        <p className="text-center md:text-lg text-slate-300 uppercase pt-8 tracking-widest">
          Join us, garner recognition,
          <br /> and stream your way to success
        </p>
        <button className="bg-primary p-3 uppercase m-8 text-white flex ">
          join rapcult <ArrowSmallRightIcon className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HomePage;
