import React from "react";

const Button = ({ label, onClick, size = "default", variant = "primary", children, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`g-btn ${size} ${variant} `}
      {...props}>
      {children || label}
    </button>
  );
};

export default Button;
