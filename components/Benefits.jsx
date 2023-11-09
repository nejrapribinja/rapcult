import React from "react";
import PhotoSlider from "./PhotoSlider";
import data from "./data.json";
import Benefit from "./Benefit";

const Benefits = () => {
  return (
    <section className="flex flex-col items-center bg-fourth w-full rounded-[4.5rem] overflow-hidden">
      <div className="m-10">
        <h2 className="text-center text-slate-400 uppercase">technology trusted by</h2>
      </div>
      <div className="flex flex-row space-x-20 items-center text-slate-400 mb-20">
        <p>logo</p>
        <p>logo</p>
        <p>logo</p>
        <p>logo</p>
      </div>
      <PhotoSlider />
      <div className="mt-[10rem]">
        <h2 className="text-center text-white md:text-4xl font-bold uppercase">amazing benefits</h2>
      </div>
      <div className="pt-10 lg:pl-[10rem] lg:pr-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {data.map((card, index) => (
          <Benefit key={index} text={card.text} title={card.title} icon={card.icon} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
