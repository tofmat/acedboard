import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="32"
    viewBox="0 0 16 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.0874 5.90169H16V1.09379C15.4975 1.02827 13.7693 0.880859 11.7567 0.880859C7.55731 0.880859 4.68061 3.38434 4.68061 7.98562V12.2202H0.0465088V17.5951H4.68061V31.1192H10.3622V17.5964H14.8089L15.5148 12.2215H10.3609V8.51857C10.3622 6.96507 10.8036 5.90169 13.0874 5.90169Z"
      fill="black"
    />
  </svg>
);
export default SVGComponent;
