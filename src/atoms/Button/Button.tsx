// src/components/atoms/Button/Button.tsx
import React, { ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';
import './Button.css';

// Definir tipos para las variantes del botón
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

// Definición de tipos para las props
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
  ...rest // Captura todas las demás props de button (id, style, etc.)
}) => {
  // Construir la clase CSS
  const baseClassName = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full-width' : ''} ${loading ? 'btn-loading' : ''}`;
  const fullClassName = className ? `${baseClassName} ${className}` : baseClassName;
  
  // Manejar clic
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };
  
  return (
    <button 
      className={fullClassName}
      onClick={handleClick}
      disabled={disabled || loading}
      type={type}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...rest}
    >
      {loading && (
        <span className="btn-spinner" aria-hidden="true">
          <span className="btn-spinner-inner"></span>
        </span>
      )}
      <span className={loading ? 'btn-content-loading' : ''}>
        {children}
      </span>
    </button>
  );
};

export default Button;