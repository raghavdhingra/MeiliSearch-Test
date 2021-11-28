import React from "react";

import "./input.css";

const Input = ({
  value = "",
  onChange = () => null,
  placeholder = "",
  type = "text",
  className = "",
}) => {
  return (
    <div className={className || ""}>
      <input
        value={value}
        className='input'
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
    </div>
  );
};

export default Input;
