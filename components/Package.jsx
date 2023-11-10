"use client";
import { CheckIcon } from "@heroicons/react/20/solid";

const Package = ({ pack, title, text, featurs }) => {
  return (
    <div className="bg-fourth text-white p-10 m-10 rounded-lg w-[18rem]">
      <p className="uppercase text-slate-400 text-center">{pack}</p>{" "}
      <p className="text-primary text-4xl text-center mt-5 mb-5 font-bold uppercase">{title}</p>
      <div className="bg-slate-400 mb-8 h-[0.055rem]"></div>{" "}
      <p className="text-slate-400 text-sm">{text}</p>
      <ul className=" list-inside">
        {featurs.map((feature, featIndex) => (
          <li key={featIndex} className="flex items-center text-slate-400 text-sm mt-2">
            <CheckIcon className=" w-5 h-5 mr-5 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Package;
