import * as React from "react";
import { SVGProps } from "react";
interface InstaIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string; // Allow size customization
}
const InstaIcon = ({ size = 40, ...props }: InstaIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-facebook"
    width={size} // Set the width and height to the size prop
    height={size}
    viewBox="0 0 24 24" // Ensure the viewBox is set correctly
    {...props}
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
  </svg>
);
export default InstaIcon;
