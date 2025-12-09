// src/components/atoms/Icon/Icon.tsx
import React from 'react';
import './Icon.css';

// Definir tipos para las props
export type IconName = 'cart' | 'search' | 'star' | 'heart' | 'user';
export type IconSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface IconProps {
  name: IconName;
  size?: IconSize;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  'aria-label'?: string;
  role?: string;
  title?: string;
}

// Mapa de iconos Unicode
const iconMap: Record<IconName, string> = {
  cart: '🛒',
  search: '🔍',
  star: '⭐',
  heart: '❤️',
  user: '👤',
};

// Función para obtener el icono
const getIcon = (name: IconName): string => {
  return iconMap[name] || '⚛️';
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'medium', 
  color = 'currentColor',
  className = '',
  style,
  onClick,
  'aria-label': ariaLabel,
  role,
  title
}) => {
  // Construir la clase CSS
  const baseClassName = `icon icon-${size}`;
  const fullClassName = className ? `${baseClassName} ${className}` : baseClassName;
  
  // Estilos combinados
  const combinedStyle = color ? { ...style, color } : style;
  
  return (
    <span
      className={fullClassName}
      style={combinedStyle}
      onClick={onClick}
      aria-label={ariaLabel}
      role={role}
      title={title}
      aria-hidden={!ariaLabel && !role ? 'true' : undefined}
    >
      {getIcon(name)}
    </span>
  );
};

// Propiedades por defecto (alternativa)
//Icon.defaultProps = {
//  size: 'medium',
//  color: 'currentColor',
//} as Partial<IconProps>;

export default Icon;