/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ getSearchData }) => {
  return (
    <div className="w-full h-8 flex justify-start items-center gap-3 py-2">
      <CiSearch className="text-2xl font-extrabold" />
      <input
        type="text"
        placeholder="Mumbai"
        onChange={(e) => getSearchData(e.target.value)}
        onClick={(e) => getSearchData(e.target.value)}
        className="border-none outline-none font-Popin text-sm placeholder:font-Popin placeholder:font-normal placeholder:text-[#606060] bg-transparent h-80%"
      />
    </div>
  );
};

export default SearchBar;
