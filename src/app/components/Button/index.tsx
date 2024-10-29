import React from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  type: "button" | "reset" | "submit";
  text: string;
  icon?: React.ReactNode;
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
      className={`flex items-center justify-center h-9 text-customGreen py-1 px-3 font-montserra text-sm border-customGreen border-2 ${className ? className : ""}`}
    >
      {icon && <span className={`${text && "mr-1"}`}>{icon}</span>} {text}
    </button>
  );
};

export default Button;
