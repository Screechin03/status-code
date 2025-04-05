import React from "react";

const Prizes = () => {
  return (
    <div className="[;lo] text-white py-10 flex flex-col items-center">
      <div className="relative">
        {/* Top outline layer */}
        <span className="absolute transform -translate-y-1 text-opacity-100  text-stroke-2 text-blue-300 font-ticket text-6xl font-bold uppercase">
          PRIZES
        </span>
        {/* Middle filled layer */}
        <span className="absolute z-60 text-white font-ticket text-3xl font-bold uppercase">
          __PRIZES__
        </span>
        {/* Bottom outline layer */}
        <span className="absolute transform translate-y-1 text-transparent text-stroke-2 text-blue-300 font-ticket text-6xl font-bold uppercase">
          PRIZES
        </span>
      </div>
    
    

      {/* Main Prizes Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-40">
        <img
          src="/Group 193.png"
          alt="Trophy"
          className="w-300 h-120 relative z-[3]"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
        <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for first image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              BEST FRESHER TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span> 
          </div>
        </div>

        {/* Second image with text overlay */}
        <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for second image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              ALL GIRLS TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
      <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for first image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              BEST FRESHER TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>

        {/* Second image with text overlay */}
        <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for second image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              ALL GIRLS TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
      <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for first image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              BEST FRESHER TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>

        {/* Second image with text overlay */}
        <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for second image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              ALL GIRLS TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
      <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for first image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              BEST FRESHER TEAM <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>

        {/* Second image with text overlay */}
        <div className="relative">
          <img
            src="/Group.png"
            alt="Trophy"
            className="w-140 h-20 relative z-[3]"
          />
          {/* Text overlay for second image */}
          <div className="absolute inset-0 flex items-center justify-center z-[4]">
            <span className="text-white font-ticketing text-2xl">
              ALL GIRLS TEAM  <span className="text-[#FE2F41] font-ticketing text-3xl pl-32"> $120</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prizes;
