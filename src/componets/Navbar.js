import React from "react";
import logo from "../assets/imges/Group 32.png";
import verticalLine from "../assets/imges/Vector 793.png";
import trainingDemo from "../assets/imges/Group 194.png";

const Navbar = () => {
  return (
    <nav
      className="flex flex-row gap-3 p-5"
      style={{
        backgroundImage: 'url("/Group 1757.png")',
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <img src={logo} alt="logo" />
      <img src={verticalLine} alt="logo" />
      <img src={trainingDemo} alt="logo" />
    </nav>
  );
};

export default Navbar;
