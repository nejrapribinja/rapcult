import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const TimelineBreakPoint = ({ point }) => {
  return (
    <div className="h-full w-[0.075rem] bg-red-500 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] bg-red-500 rounded-full flex justify-center items-center">
        <p className="font-bold text-4xl text-white">{point}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const backgroundStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('/assets/images/6.jpg')",
    backgroundSize: "cover",
    borderRadius: "2rem",
  };

  return (
    <>
      <div className="lg:px-40" id="howitworks">
        <h1 className="text-center text-white md:text-4xl font-bold uppercase mt-[8rem] mb-10">
          How it works
        </h1>
        <div className="w-full h-96 flex flex-row gap-20">
          <div className="flex-1 flex items-center justify-center " style={backgroundStyle}></div>
          <TimelineBreakPoint point={1} />
          <div className="flex-1 text-white flex flex-col justify-center">
            <div className="text-xl uppercase font-bold mb-5">
              Join <br />
              the rapcult
            </div>
            <div className="text-sm text-white/70 w-3/5">
              Sign up with Rapcult and be part of an independent record label that understands your
              ambitiont and supports your dreams.
            </div>
          </div>
        </div>
        <div className="w-full h-96 flex flex-row gap-20">
          <div className="flex-1 text-white flex flex-col justify-center items-end text-right">
            <div className="text-xl uppercase font-bold mb-5">
              Grant Your
              <br />
              Song Rights
            </div>
            <div className="text-sm text-white/70 w-3/5">
              Give us the privilege to distribute your work to connect with your followers and the
              rap enthusiasts around the globe.
            </div>
          </div>
          <TimelineBreakPoint point={2} />
          <div className="flex-1 flex items-center justify-center" style={backgroundStyle}></div>
        </div>
        <div className="w-full h-96 flex flex-row gap-20">
          <div className="flex-1 flex items-center justify-center" style={backgroundStyle}></div>
          <TimelineBreakPoint point={3} />
          <div className="flex-1 text-white flex flex-col justify-center">
            <div className="text-xl uppercase font-bold mb-5">
              Garner Recognition
              <br />& Success
            </div>
            <div className="text-sm text-white/70 w-3/5">
              We help you gain hundreds of thousands of streams across platforms like Spotify and
              more, bringing your music to the recognition it deserves.
            </div>
          </div>
        </div>
      </div>
      <div className="h-60 relative flex justify-center items-center mb-[7rem]">
        <button className="bg-primary p-3 uppercase text-white flex z-10 shadow-[0_35px_60px_-15px_rgba(0,0,00.3)]">
          join rapcult <ArrowSmallRightIcon className="w-6 h-6" />
        </button>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2  w-[0.075rem] h-1/2 bg-red-500"></div>
        <div className="absolute overflow-hidden max-w-full">
          <p className="text-secondary opacity-30 tracking-widest uppercase font-outline-2 whitespace-nowrap mt-0 text-[16rem] animate-slide">
            join rapcult
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
