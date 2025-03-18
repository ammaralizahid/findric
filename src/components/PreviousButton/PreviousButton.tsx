'use client'

import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  isLoading?: boolean
}

const PreviosButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      style,
      className,
      type = 'button',
      text,
      icon,
      disabled = false,
      variant = 'primary',
      isLoading = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    // Base default classes
    const defaultClasses = ""

    // Variant classes
    // const variantClasses = {
    //   primary: 'bg-customGreen text-white hover:bg-green-600',
    //   secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    //   outline: 'border border-customGreen text-customGreen hover:bg-green-50',
    // }

    // State classes
    const stateClasses = (disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

    // Combine all classes
    const combinedClasses = [
      defaultClasses,
    //   variantClasses[variant],
      stateClasses,
      className
    ].filter(Boolean).join(' ')

    return (
      <button
        ref={ref}
        style={{
          borderRadius: '6px',
          ...style
        }}
        type={type}
        disabled={disabled || isLoading}
        onClick={onClick}
        className={combinedClasses}
        {...rest}
      >
        {isLoading ? (
          <span className="animate-spin">🌀</span>
        ) : (
          <>
            {icon && <span className={text ? 'mr-2' : ''}>{icon}</span>}
            {text}
          </>
        )}
      </button>
    )
  }
)

PreviosButton.displayName = 'PreviosButton'

export default PreviosButton