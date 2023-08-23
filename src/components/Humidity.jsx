/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import thumbup from "../assets/thumbup.png";
import thumbyo from "../assets/thumbyo.png";
import thumbdown from "../assets/thumbdown.png";

const Humidity = ({ mainData }) => {
  const humid = mainData.rh;
  // console.log(humid);

  let humidlevel;
  if (humid >= 70) {
    humidlevel = "Poor High";
  } else if (humid < 70 && humid >= 60) {
    humidlevel = "Fair";
  } else if (humid < 60 && humid >= 30) {
    humidlevel = "Normal";
  } else if (humid < 30 && humid >= 25) {
    humidlevel = "Fair";
  } else if (humid < 25) {
    humidlevel = "Poor Low";
  }

  const humidBall = (humid * 76) / 100;
  
  const humidBallPr = humidBall + "%";

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Humidity</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3 relative">
        <h1 className="font-Popin text-5xl font-medium mt-10">{humid}%</h1>
        <div className="w-full flex gap-3 items-center">
          <p className="text-[16px] font-Popin font-medium">{humidlevel}</p>
          <img
            src={
              humidlevel == "Normal"
                ? thumbup
                : humidlevel == "Fair"
                ? thumbyo
                : thumbdown
            }
            alt="thumb"
            className="h-[50px]"
          />
        </div>
        <div className="levelbar absolute w-8 h-[80%] bg-transparent border-2 right-2 top-4 rounded-[16px] py-1 px-[3px]">
          <div
            className={`w-6 h-6 bg-[#4050D2] rounded-[50%] absolute`}
            style={{ bottom: humidBallPr }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
