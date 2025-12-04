import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'telegram' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-500 focus:ring-brand-500",
    secondary: "border-gray-300 text-slate-700 bg-white hover:bg-gray-50 focus:ring-brand-500",
    whatsapp: "border-transparent text-white bg-green-600 hover:bg-green-500 focus:ring-green-500",
    telegram: "border-transparent text-white bg-[#24A1DE] hover:bg-[#1b8eb3] focus:ring-[#24A1DE]",
    outline: "border-gray-600 text-white bg-transparent hover:bg-white/10 focus:ring-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};