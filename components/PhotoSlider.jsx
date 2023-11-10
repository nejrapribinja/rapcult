"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const PhotoSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 5, spacing: 20 },
    range: {
      min: -5,
      max: 5,
    },
  });

  const images = [
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/6.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/6.jpg",
  ];

  return (
    <>
      <p className="text-white w-full text-left uppercase md:text-4xl font-bold pl-10 mt-20">
        join creative
        <br /> comunity
      </p>
      <div
        ref={sliderRef}
        className="keen-slider image-row "
        style={{ transform: "rotate(-5deg)" }}>
        {images.map((image, index) => (
          <div className="keen-slider__slide " key={index}>
            <Image
              width={300}
              height={300}
              key={index}
              src={image}
              alt={`Slika ${index + 1}`}
              className="rounded-[2.5rem]"
            />
          </div>
        ))}
      </div>
      <p className="text-slate-400 w-full text-right uppercase md:text-4xl font-bold pr-10">
        of creators
        <br /> like you
      </p>
    </>
  );
};

export default PhotoSlider;
