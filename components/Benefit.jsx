"use client";
import React from "react";
import { ChevronDownIcon, ClipboardDocumentListIcon } from "@heroicons/react/20/solid";

const Benefit = ({ title, icon, text }) => {
  return (
    <div className="m-5">
      <ClipboardDocumentListIcon height={60} width={60} className="text-third" />
      <h1 className="uppercase text-xl font-bold text-third mt-3 mb-3">{title}</h1>
      <p className="text-slate-400">{text}</p>
      <p className="text-third mt-3 flex items-center ">
        SHOW MORE <ChevronDownIcon width={40} height={40} />{" "}
      </p>
    </div>
  );
};

export default Benefit;
