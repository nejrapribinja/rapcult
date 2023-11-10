import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <section className=" bg-fourth rounded-t-[4.5rem]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white w-full text-left uppercase md:text-4xl font-bold ml-20 m-10">
            rapcult
          </p>
        </div>
        <div className="m-10 mr-20">
          <button className="bg-primary p-3 uppercase text-white flex ">
            join rapcult <ArrowSmallRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="text-white text-left uppercase text-sm mt-5 mr-20">
          <p className="text-slate-400 ml-20 mb-3">navigate</p>
          <p className="ml-20 mb-3">how it works</p>
          <p className="ml-20 mb-3">packages</p>
          <p className="ml-20 mb-3">success stories</p>
          <p className="ml-20 mb-3">about rapcult</p>
          <p className="ml-20 mb-3">about rapcult</p>
        </div>
        <div className="text-white text-left uppercase text-sm mt-5 mr-20">
          <p className="text-slate-400 ml-20 mb-3">legal</p>
          <p className="ml-20 mb-3">terms of condition</p>
          <p className="ml-20 mb-3">gdpr</p>
        </div>
        <div className="text-white text-left uppercase text-sm mt-5">
          <p className="text-slate-400 ml-20 mb-3">social</p>
          <p className="ml-20 mb-3">instagram</p>
          <p className="ml-20 mb-3">facebook</p>
          <p className="ml-20 mb-3">youtube</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
