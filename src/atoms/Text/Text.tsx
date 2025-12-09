// src/components/atoms/Text/Text.tsx
import React, { ReactNode } from 'react';
import './Text.css';

// Definir tipos para las variantes de texto
export type TextVariant = 'title' | 'subtitle' | 'body' | 'caption';
export type TextColor = 'dark' | 'light' | 'primary' | 'success';

// Definición de tipos para las props
export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  bold?: boolean;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  role?: string;
}

const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  color = 'dark', 
  bold = false,
  className = '',
  style,
  'aria-label': ariaLabel,
  role
}) => {
  // Construir la clase CSS
  const baseClassName = `text text-${variant} text-${color} ${bold ? 'text-bold' : ''}`;
  const fullClassName = className ? `${baseClassName} ${className}` : baseClassName;
  
  return (
    <span 
      className={fullClassName}
      style={style}
      aria-label={ariaLabel}
      role={role}
    >
      {children}
    </span>
  );
};

export default Text;