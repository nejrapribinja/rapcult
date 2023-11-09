import React from "react";
import PhotoSlider from "./PhotoSlider";

const Benefits = () => {
  return (
    <section className="h-screen flex flex-col  items-center bg-fourth w-full rounded-[4.5rem] overflow-hidden">
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
    </section>
  );
};

export default Benefits;
