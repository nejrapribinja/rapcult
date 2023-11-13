"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const PhotoSlider = () => {
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
      return 5;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 1.5;
    }
  };
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: responsiveSlides(),
      spacing: 10,
    },
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
      <div ref={sliderRef} className="keen-slider" style={{ transform: "rotate(-5deg)" }}>
        {images.map((image, index) => (
          <div className="keen-slider__slide" key={index}>
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
