"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import datastories from "./datastories.json";
import Story from "./Story";

const SuccessStories = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

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
    if (screenWidth >= 768) {
      return 1.5;
    } else {
      return 1;
    }
  };

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      origin: "center",
      perView: responsiveSlides(),
    },
  });

  return (
    <>
      <section id="successstories">
        <h1 className="text-center text-white md:text-4xl font-bold uppercase mt-[8rem] mb-10">
          Success stories
        </h1>
      </section>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {datastories.map((story, index) => (
            <div className="keen-slider__slide" key={index}>
              <Story
                image={story.image}
                title={story.title}
                text={story.text}
                streams={story.streams}
                revenue={story.revenue}
                collabs={story.collabs}
              />
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SuccessStories;
