import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="42"
    viewBox="0 0 32 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.4746 16.8965L29.672 5.04053H27.2546L18.3986 15.3339L11.3266 5.04053H3.16797L13.864 20.6072L3.16797 33.0405H5.5853L14.9373 22.1699L22.408 33.0405H30.5653L19.472 16.8965H19.4746ZM16.1626 20.7445L15.0786 19.1952L6.45597 6.86053H10.168L17.128 16.8139L18.212 18.3645L27.2573 31.3032H23.544L16.1626 20.7459V20.7445Z"
      fill="black"
    />
  </svg>
);
export default SVGComponent;
