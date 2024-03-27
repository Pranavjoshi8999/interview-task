import React, { useState } from "react";

const SortByOptions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>Open Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          {/* Content inside the dropdown */}
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      )}
    </div>
  );
};

export default SortByOptions;
