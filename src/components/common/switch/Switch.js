import React, { useState, useRef } from "react";

import "./switch.css";

const Switch = (props) => {
  const inputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!inputRef.current?.checked);
  };

  return (
    <div className="switch">
      <span>
        <input
          type="checkbox"
          ref={inputRef}
          checked={isChecked}
          onChange={handleChange}
        />
        <button
          className="slider"
          type="button"
          onClick={handleChange}
        ></button>
      </span>
    </div>
  );
};

export default Switch;
