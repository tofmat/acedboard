import { MontserratFont } from "@/assets/font";
import React, { HtmlHTMLAttributes } from "react";

interface CustomTextHeadingProps
  extends HtmlHTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const TextHeading: React.FC<CustomTextHeadingProps> = ({ text, ...props }) => {
  return (
    <h3
      className="mb-3 font-bold text-[#000000] text-2xl md:text-3xl"
      {...props}
    >
      {text}
    </h3>
  );
};

export default TextHeading;
