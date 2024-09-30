// Button.tsx
import React from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  type: "button" | "reset" | "submit";
  text: string;
  icon?: React.ReactNode; // Added prop for icon
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  style,
  className,
  type,
  text,
  icon,
  disabled,
  onClick,
  ...rest
}) => {
  // Define default styles
  const defaultStyle: React.CSSProperties = {
    borderRadius: "6px",
    cursor: "pointer",
  };

  // Merge default styles with custom styles
  const buttonStyle: React.CSSProperties = { ...defaultStyle, ...style };

  return (
    <button
      style={buttonStyle}
      type={type}
      disabled={disabled}
      {...rest}
      onClick={onClick}
      className={`flex items-center justify-center ${
        className ? className : ""
      } tracking-[1px] h-9 hover:bg-NoCustomHoverBtn shadow-md text-white font-NoMontserrat bg-NoCustomGreen py-1 px-3 w-full text-sm text-normal`}
    >
      {icon && <span className={`${text && "mr-1"}`}>{icon}</span>} {text}
    </button>
  );
};

export default Button;
