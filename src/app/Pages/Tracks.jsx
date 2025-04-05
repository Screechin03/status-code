import React from "react";

const Tracks = () => {
  return (
    <div className="[;lo] text-white py-10 flex flex-col items-center">
      <div className="relative pt-20">
        {/* Top outline layer */}
        <span className="absolute transform -translate-y-1 text-opacity-100  text-stroke-2 text-blue-300 font-ticket text-6xl font-bold uppercase">
          TRACKS
        </span>
        {/* Middle filled layer */}
        <span className="absolute z-60 text-white font-ticket text-3xl font-bold uppercase">
          __TRACKS__
        </span>
        {/* Bottom outline layer */}
        <span className="absolute transform translate-y-1 text-transparent text-stroke-2 text-blue-300 font-ticket text-6xl font-bold uppercase">
          TRACKS
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center pt-40">
        <img
          src="/Group 206.png"
          alt="Tracks"
          className="w-300 h-120 relative z-[3]"
        />
      </div>
    </div>
  );
};

export default Tracks;
