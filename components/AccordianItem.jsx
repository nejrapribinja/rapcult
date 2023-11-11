"use client";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { Collapse } from "react-collapse";

const AccordianItem = ({ open, toggle, question, answer }) => {
  return (
    <>
      <div
        className="flex justify-between pl-10 pr-10 pt-5 pb-5 border-b border-b-slate-400 cursor-pointer"
        onClick={toggle}>
        <p className="text-white">{question}</p>
        {open ? (
          <ChevronUpIcon className="w-6 h-6 text-primary" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-primary" />
        )}
      </div>

      <Collapse isOpened={open}>
        <p className="text-white p-5">{answer}</p>
      </Collapse>
    </>
  );
};

export default AccordianItem;
