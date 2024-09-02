import { MontserratFont } from "@/assets/font";
import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<CustomButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="py-3 md:py-3.5 px-4 md:px-5 rounded-xl text-sm bg-custom-gradient font-normal text-white"
      style={MontserratFont.style}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
