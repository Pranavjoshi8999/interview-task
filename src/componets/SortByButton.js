import React, { useState } from "react";
import sortIcon from "../assets/imges/bx-sort.svg.png";
import SortByOptions from "./SortByOptions";
export default function SortByButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex border-2 justify-center items-center px-4 gap-2 cursor-pointer relative h-[42px]"
        onClick={toggleDropdown}
      >
        <b>Sort By </b>
        <img src={sortIcon} alt="sort by" className="w-[20px] h-[20px] " />{" "}
      </div>
      {isOpen && (
        <div className="h-[459px] w-[399px] border-2 absolute z-50 bg-white">
          {/* Content inside the dropdown */}
          <div className="p-5">
            <b>Sort by</b>
            <div className="flex items-center pt-5 px-2">
              <input
                type="checkbox"
                name="latest_course"
                id=""
                className="w-[20px] h-[20px]"
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="">Latest Coruse</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="checkbox"
                name="latest_course"
                id=""
                className="w-[20px] h-[20px]"
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="">Coruse By Owner</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="checkbox"
                name="latest_course"
                id=""
                className="w-[20px] h-[20px]"
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="">Coruse By codeblu</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="checkbox"
                name="latest_course"
                id=""
                className="w-[20px] h-[20px]"
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="">Lecture: Low to High</label>
            </div>
            <div className="flex items-center p-2">
              <input
                type="checkbox"
                name="latest_course"
                id=""
                className="w-[20px] h-[20px]"
              />
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="">Lecture: Low to High</label>
            </div>
          </div>
          <button className="bg-[#00a2fe] text-white font-semibold w-[321px] h-[36px] text-center ml-[10%]">
            Show Results
          </button>
        </div>
      )}
    </div>
  );
}
