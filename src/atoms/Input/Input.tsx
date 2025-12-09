// src/components/atoms/Input/Input.tsx
import React, { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import './Input.css';

// Definir tipos para las props
export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  autoComplete?: 'on' | 'off' | string;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  pattern?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  placeholder = '', 
  value = '', 
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  name,
  id,
  className = '',
  disabled = false,
  required = false,
  readOnly = false,
  autoFocus = false,
  autoComplete,
  min,
  max,
  step,
  pattern,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  style
}) => {
  // Construir la clase CSS
  const baseClassName = 'input-field';
  const fullClassName = className ? `${baseClassName} ${className}` : baseClassName;
  
  return (
    <input
      className={fullClassName}
      type={type}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
      min={min}
      max={max}
      step={step}
      pattern={pattern}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      style={style}
    />
  );
};

export default Input;