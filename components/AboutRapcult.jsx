"use client";
import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import dataquestions from "./dataquestions.json";
import Form from "./Form";

const AboutRapcult = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div id="aboutrapcult" className="flex flex-col lg:flex-row justify-center mb-1">
      <div className="w-full text-center">
        <p className="text-white uppercase md:text-2xl font-bold m-10">
          Frequently asked questions
        </p>
        <div className="w-full h-auto mb-20 pr-20 pl-20 mx-auto">
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
      <div className="w-full mr-10 text-center">
        <p className="text-white uppercase md:text-2xl font-bold m-10">
          Do you still have questions?
        </p>
        <div className="bg-fourth rounded-xl">
          <p className="text-slate-400 p-5">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit. Sed id varius purus.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default AboutRapcult;
