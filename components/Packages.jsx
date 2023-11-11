"use client";
import React, { useState, useEffect } from "react";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import Package from "./Package";
import datapackage from "./datapackage.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Packages = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const responsiveSlides = () => {
    if (screenWidth >= 1024) {
      return 4.5;
    } else if (screenWidth >= 768) {
      return 2.5;
    } else {
      return 1.5;
    }
  };
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: responsiveSlides(),
      spacing: 10,
    },
  });
  return (
    <section className="flex flex-col items-center bg-fifth w-full rounded-[4.5rem]" id="packages">
      <div className="mt-[5rem]">
        <h2 className="text-center text-white md:text-6xl font-bold uppercase">join rapcult</h2>
        <p className="text-slate-400 text-center pt-10 uppercase text-xl">
          all artists are welcome to get in touch,
          <br /> rapcult is welcoming and supportive community
        </p>
        <div className="mt-10 items-center">
          <label className="block text-slate-400 text-sm mb-2 text-center">
            Paste your Spotify link to get the right package
          </label>
          <div className="relative">
            <input
              className="border border-white p-5 w-full bg-transparent "
              type="text"
              placeholder="http://"
              aria-label="Send"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white text-sm p-2 rounded-full">
              <ArrowSmallRightIcon className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {datapackage.map((pack, index) => (
          <div className="keen-slider__slide " key={index}>
            <Package pack={pack.pack} title={pack.title} text={pack.text} featurs={pack.featurs} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
