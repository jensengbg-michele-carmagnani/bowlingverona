import { SVGProps } from "react";

interface FacebookIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string; // Allow size customization
}

const FacebookIcon = (
  { size = 80, ...props }: FacebookIconProps // Change default size to 80
) => (
  <div>
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
      viewBox={`0 0 24 24`} // Ensure the viewBox is set correctly
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  </div>
);

export default FacebookIcon;
