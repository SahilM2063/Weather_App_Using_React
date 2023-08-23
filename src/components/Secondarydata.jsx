/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import lonImage from "../assets/longitude.png";
import latImage from "../assets/latitude.png";

import clear_sky from "../assets/WeatherIcons/clear_sky.png";
import cloudy from "../assets/WeatherIcons/cloudy.png";
import drizzle from "../assets/WeatherIcons/drizzle.png";
import dust from "../assets/WeatherIcons/dust.png";
import fog from "../assets/WeatherIcons/fog.png";
import freezing_rain from "../assets/WeatherIcons/freezing_rain.png";
import haze from "../assets/WeatherIcons/hazy.png";
import mist from "../assets/WeatherIcons/mist.png";
import partly_cloudy from "../assets/WeatherIcons/partly_cloudy.png";
import rain from "../assets/WeatherIcons/rain.png";
import sandstorm from "../assets/WeatherIcons/sandstorm.png";
import showers from "../assets/WeatherIcons/showers.png";
import sleet from "../assets/WeatherIcons/sleet.png";
import smoke from "../assets/WeatherIcons/smoke.png";
import snow from "../assets/WeatherIcons/snow.png";
import thunderstorm from "../assets/WeatherIcons/thunderstorm.png";
import tornado from "../assets/WeatherIcons/tornado.png";

const Secondarydata = ({ mainData }) => {
  // console.log(mainData);\

  const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);

  useEffect(() => {
    const WeatherData = {
      description: mainData.weather.description,
    };

    setWeatherDescription(WeatherData.description);

    const iconMappings = {
      Fog: fog,
      Haze: haze,
      "Clear sky": clear_sky,
      "Few clouds": partly_cloudy,
      "Broken clouds": cloudy,
      "Scattered clouds": cloudy,
      "Overcast clouds": cloudy,
      "Moderate rain": showers,
      "Light rain": rain,
      Freezing_rain: freezing_rain,
      Drizzle: drizzle,
      Cloudy: cloudy,
      Dust: dust,
      Mist: mist,
      Rain: rain,
      Sandstorm: sandstorm,
      Showers: showers,
      Sleet: sleet,
      Snow: snow,
      Thunderstorm: thunderstorm,
      Tornado: tornado,
      // Add more mappings here
    };

    setWeatherIcon(iconMappings[WeatherData.description]);
  }, [mainData]);

  return (
    <div className="w-[90%] flex flex-col lg:flex-col xs:flex-col sm:flex-row items-start justify-between gap-4 py-6 border-t-2">
      <div className="row flex items-center gap-3">
        <img src={weatherIcon} alt="" className="w-[30px] lg:w-[30px] md:w-[50px]" />
        <span className="text-[#272727] font-Popin text-[14px] lg:text-[14px] md:text-[16px] font-[500]">
          {mainData.weather.description}
        </span>
      </div>
      <div className="row flex items-center gap-3">
        <img src={latImage} alt="lat-icon" className="w-[30px] lg:w-[30px] md:w-[50px]" />
        <span className="text-[#272727] font-Popin text-[14px] lg:text-[14px] md:text-[16px] font-[500]">
          {mainData.lat}
        </span>
      </div>
      <div className="row flex items-center gap-3">
        <img src={lonImage} alt="lon-icon" className="w-[30px] lg:w-[30px] md:w-[50px]" />{" "}
        <span className="text-[#272727] font-Popin text-[14px] lg:text-[14px] md:text-[16px] font-[500]">
          {mainData.lon}
        </span>
      </div>
    </div>
  );
};

export default Secondarydata;
