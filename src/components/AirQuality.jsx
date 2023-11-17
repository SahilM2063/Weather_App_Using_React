/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import starsix from "../assets/starsix.png";
import starfive from "../assets/starfive.png";
import starfour from "../assets/starfour.png";
import starthree from "../assets/starthree.png";
import startwo from "../assets/startwo.png";
import starone from "../assets/starone.png";

const AirQuality = ({ mainData }) => {
  const aq = mainData.aqi;
  let aqlevel;

  if (aq > 0 && aq <= 53) {
    aqlevel = "Good";
  } else if (aq > 50 && aq <= 100) {
    aqlevel = "Satisfactory";
  } else if (aq > 100 && aq <= 200) {
    aqlevel = "Moderate";
  } else if (aq > 200 && aq <= 300) {
    aqlevel = "Poor";
  } else if (aq > 300 && aq <= 400) {
    aqlevel = "Very Poor";
  } else if (aq > 400 && aq <= 500) {
    aqlevel = "Severe";
  }

  const aqBall = ((aq / 5) * 76) / 100;
  const aqBallPr = aqBall + "%";

  return (
    <div className="w-[240px] h-[200px] bg-white rounded-2xl p-3 shadow-[0_0_8px_#64646f10]">
      <span className="font-Popin text-[16px] text-[#B0B0B0]">Air Quality</span>
      <div className="h-[80%] flex flex-col justify-between items-start gap-4 pl-3 relative">
        <h1 className="font-Popin text-5xl font-medium mt-10">{aq}</h1>
        <div className="w-full flex gap-3 items-center mt-1">
          <img
            src={
              aqlevel == "Good"
                ? starsix
                : aqlevel == "Satisfactory"
                ? starfive
                : aqlevel == "Moderate"
                ? starfour
                : aqlevel == "Poor"
                ? starthree
                : aqlevel == "Very Poor"
                ? startwo
                : aqlevel == "Severe"
                ? starone
                : ""
            }
            alt="starrate"
            className="w-[30px]"
          />
          <p className="text-[15px] font-Popin font-medium">{aqlevel}</p>
        </div>
        <div className="levelbar absolute w-8 h-[80%] bg-transparent border-2 right-2 top-4 rounded-[16px] py-1 px-[3px]">
          <div
            className={`w-6 h-6 bg-[#4050D2] rounded-[50%] absolute`}
            style={{ bottom: aqBallPr }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
