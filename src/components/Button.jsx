import React from "react";

const Button = ({ text, style }) => {
  return (
    <button
      className={`md:m-[10px] flex items-center justify-center rounded-[50px] text-[10px]  font-medium md:text-[25px] ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
