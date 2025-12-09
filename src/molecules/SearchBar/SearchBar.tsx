// src/components/molecules/SearchBar/SearchBar.tsx
import React, { ChangeEvent } from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import './SearchBar.css';

// Definición de tipos para las props
interface SearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className="search-bar">
      <Input 
        type="text" 
        placeholder="Buscar productos..." 
        value={value}
        onChange={onChange}
        name="search"
      />
      <Button variant="primary" onClick={onSearch}>
        <Icon name="search" /> Buscar
      </Button>
    </div>
  );
};

export default SearchBar;