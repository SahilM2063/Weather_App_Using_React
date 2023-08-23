/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import compasIcon from "../assets/compas.png";

const WindStatus = ({ mainData }) => {
  const wind_spd = mainData.wind_spd;
  // console.log(wind_spd);

  const getDirection = (degree) => {
    const directions = [
      "North",
      "NorthEast",
      "East",
      "SouthEast",
      "South",
      "SouthWest",
      "West",
      "NorthWest",
      "North",
    ];
    const index = Math.round(degree / 45) % 8;
    return directions[index];
  };

  const dir = getDirection(wind_spd);

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Wind Status</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3">
        <h1 className="font-Popin text-5xl font-medium mt-10">
          {wind_spd ? wind_spd.toFixed(1) : ""}
          <span className="text-lg ml-2">Km/h</span>
        </h1>
        <div className="w-full flex gap-3 items-center ">
          <img src={compasIcon} alt="compasIcon" className={`w-[20px]`} />
          <p className="text-lg font-Popin font-medium">{dir}</p>
        </div>
      </div>
    </div>
  );
};

export default WindStatus;
