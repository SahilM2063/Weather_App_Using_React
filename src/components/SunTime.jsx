/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";

const SunTime = ({ mainData }) => {
  const rise = mainData.sunrise;
  const set = mainData.sunset;

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">
        Sunrise & Sunset
      </span>
      <div className=" flex flex-col justify-evenly items-start p-2 gap-4 mt-4 h-[76%]">
        <div className="row flex items-center gap-3">
          <img src={sunrise} alt="sunrise" className="w-[40px]" />
          <span className="font-Popin text-lg font-medium">{rise} AM</span>
        </div>
        <div className="row flex items-center gap-3">
          <img src={sunset} alt="sunrise" className="w-[40px]" />
          <span className="font-Popin text-lg font-medium">{set} PM</span>
        </div>
      </div>
    </div>
  );
};

export default SunTime;
