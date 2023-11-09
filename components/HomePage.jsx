import React from "react";

const HomePage = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-1">
        <h1 className="text-white text-center sm:text-7xl font-bold uppercase">
          Dominate the industry
          <br /> with Rapcult
        </h1>
        <p className="text-center md:text-lg text-slate-300 uppercase pt-8 tracking-widest">
          Join us, garner recognition,
          <br /> and stream your way to success
        </p>
      </div>
    </section>
  );
};

export default HomePage;
