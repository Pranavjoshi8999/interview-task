import React from "react";
import arrowImg from "../assets/imges/bx-play-circle.svg.png";
import clockImg from "../assets/imges/bx-time-five.svg.png";

function Card({ image, heading, desc, type, isLatest }) {
  return (
    <div
      style={{ height: "288px", width: "236px" }}
      className="relative border"
    >
      {isLatest && (
        <span className="bg-blue-950 text-white absolute w-[52px] h-[20px] text-center">
          Latest
        </span>
      )}
      <img
        src={image}
        alt="course-img"
        style={{ height: "130px", width: "236px" }}
      />
      <div
        className="text-center text-white w-full"
        style={{
          background:
            type === "by codeblu"
              ? "linear-gradient(101.16deg, #0065B4 0%, #009CF6 100%)"
              : "linear-gradient(90deg, #FF9D0A 0%, #CE7C00 100%)",
        }}
      >
        {type}
      </div>
      <div className="p-2">
        <h3 style={{ lineHeight: 1 }}>{heading}</h3>
        <span className="flex my-3 text-xs text-gray-500 gap-3">
          <div className="flex gap-1">
            <img src={arrowImg} alt="playbtn" />
            19 Lectures
          </div>
          <div className="flex gap-1">
            <img src={clockImg} alt="playbtn" />
            1.5 Hrs
          </div>
        </span>
        <p className="text-[#53585E] text-sm mt-2" style={{ lineHeight: 1 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Card;
