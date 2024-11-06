import React from "react";

interface ButtonProps {
  className?: string;
  imgUrl?: string;
  target?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  imgUrl,
  target,
  children,
}) => {
  return (
    <a href="#" target={target} className={`button ${className}`}>
      {imgUrl && <img src={imgUrl} alt="icon" className="button-icon" />}
      {children}
    </a>
  );
};
