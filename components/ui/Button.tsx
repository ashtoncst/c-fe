import React from 'react';
import { MenuIconLink } from '@/assets/icons/MenuIconLink';
import { PlusIcon } from '@/assets/icons/PlusIcon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'plus' | 'none';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-normal font-dm-sans transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] outline-none';

  const variants = {
    primary:
      'bg-con-custom-green text-white hover:bg-con-custom-green-bold border border-con-custom-green hover:border-con-custom-green-bold',
    secondary: 'bg-white text-con-custom-green hover:bg-gray-50 border border-con-custom-green',
    outline:
      'bg-transparent border border-con-custom-green text-con-custom-green hover:bg-con-custom-green hover:text-white',
    ghost: 'bg-transparent text-con-custom-green hover:bg-con-custom-green/10',
  };

  const sizes = {
    sm: 'text-[14px] px-4 py-2 gap-2',
    md: 'text-[14px] px-[14px] py-[8px] gap-3',
    lg: 'text-[14px] px-8 py-4 gap-4',
  };

  const renderIcon = () => {
    if (icon === 'arrow') {
      return (
        <span className="flex items-center justify-center transform -rotate-90">
          <MenuIconLink width={12} height={12} />
        </span>
      );
    }
    if (icon === 'plus') {
      return (
        <span className="flex items-center justify-center">
          <PlusIcon width={12} height={12} className="text-current" />
        </span>
      );
    }
    return null;
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''
        } ${className}`}
      {...props}
    >
      {children}
      {renderIcon()}
    </button>
  );
};
