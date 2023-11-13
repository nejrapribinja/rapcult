"use client";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Story = ({ image, title, text, streams, revenue, collabs }) => {
  return (
    <div className="flex flex-col md:flex-row bg-fourth text-white p-5 m-10 rounded-lg ">
      <div className=" mr-8">
        <Image src={image} alt={title} className="w-full h-full" width={400} height={400} />
      </div>
      <div className="">
        <p className="text-primary text-4xl mt-5 mb-5 font-bold uppercase">{title}</p>
        <div className="font-sm">{text}</div>
        <div className="bg-slate-400 mb-8 mt-10 h-[0.055rem]"></div>
        <div className="flex">
          <p className="text-slate-400 text-sm pr-10">
            {streams}
            <ArrowUpRightIcon className="text-primary w-5 h-5 inline-block" />
            <br />
            STREAMS
          </p>
          <p className="text-slate-400 text-sm pr-10">
            {revenue}
            <ArrowUpRightIcon className="text-primary w-5 h-5 inline-block" />
            <br />
            REVENUE
          </p>
          <p className="text-slate-400 text-sm">
            {collabs}
            <ArrowUpRightIcon className="text-primary w-5 h-5 inline-block" />
            <br />
            COLLABS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
