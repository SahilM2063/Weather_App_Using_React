/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProgressBar from "react-customizable-progressbar";

const Uvindex = ({ mainData }) => {
  const uv = mainData.uv;
  const progress = 8.33 * uv;
  // console.log(progress);
  // console.log(mainData.uv);

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">UV Index</span>
      <div className="flex flex-col justify-center items-center w-full relative overflow-hidden">
        <ProgressBar
          radius={70}
          progress={progress}
          strokeWidth={30}
          strokeColor="#ffce54"
          strokeLinecap="butt"
          trackStrokeWidth={14}
          trackStrokeLinecap="butt"
          cut={180}
          rotate={-180}
          className
        />
        <span className="text-[black] z-10 absolute top-[54%] font-Popin text-lg font-medium">
          {uv ? uv.toFixed(1) : uv}/12
        </span>
      </div>
    </div>
  );
};

export default Uvindex;