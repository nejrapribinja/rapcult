"use client";
import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import dataquestions from "./dataquestions.json";

const AboutRapcult = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div id="aboutrapcult" className="flex flex-col md:flex-row justify-center">
      <div className=" w-full text-center">
        <p className="text-white uppercase md:text-2xl font-bold m-10">
          Frequently asked questions
        </p>
        <div className="w-full md:w-auto md:inline-block h-auto mb-20 pr-20 pl-20 mx-auto">
          {dataquestions.map((question, index) => {
            return (
              <AccordianItem
                question={question.question}
                answer={question.answer}
                key={index}
                open={index === open}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full text-center">
        <p className="text-white uppercase md:text-2xl font-bold m-10">
          Do you still have questions?
        </p>
      </div>
    </div>
  );
};
export default AboutRapcult;
