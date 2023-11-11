"use client";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const Form = () => {
  return (
    <>
      <div className="p-10 pt-0">
        <label className="block text-white text-sm mt-5 mb-2 text-left uppercase">
          first and name
        </label>
        <input
          className="border border-white p-5 h-10 w-full bg-transparent "
          type="text"
          placeholder="John"
        />
        <label className="block text-white text-sm mt-5 mb-2 text-left uppercase">email</label>
        <input
          className="border border-white p-5 h-10 w-full bg-transparent "
          type="text"
          placeholder="your@mail.com"
        />
        <label className="block text-white text-sm mt-5 mb-2 text-left uppercase">
          phone number
        </label>
        <input
          className="border border-white p-5 h-10 w-full bg-transparent "
          type="text"
          placeholder="+421"
        />
        <label className="block text-white text-sm mt-5 mb-2 text-left uppercase">
          message from you to rapcult
        </label>
        <textarea
          className="w-full bg-transparent h-20 pl-5 pt-2"
          placeholder="Write here"></textarea>
        <button className="bg-primary p-3 mt-5 uppercase text-white flex">
          send message <ArrowSmallRightIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default Form;
