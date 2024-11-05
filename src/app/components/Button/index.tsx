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
  // Define default styles and fallback class names
  const defaultStyle: React.CSSProperties = {
    borderRadius: "6px",
    cursor: "pointer",
  };
  const defaultClasses = "flex items-center justify-center h-9 md:h-10 text-customGreen py-1 px-3 font-montserrat text-md border-customGreen border";

  // Merge default styles with custom styles
  const buttonStyle: React.CSSProperties = { ...defaultStyle, ...style };

  return (
    <button
      style={buttonStyle}
      type={type}
      disabled={disabled}
      {...rest}
      onClick={onClick}
      className={className || defaultClasses} // Apply `className` prop if provided, else use defaults
    >
      {icon && <span className={`${text && "mr-1"}`}>{icon}</span>} {text}
    </button>
  );
};

export default Button;
