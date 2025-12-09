// src/components/organisms/Header/Header.tsx (versión mejorada)
import React, { ChangeEvent } from 'react';
import Text from '../../atoms/Text/Text';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import Icon, { IconName } from '../../atoms/Icon/Icon'; // Asumiendo que Icon exporta el tipo IconName
import Button from '../../atoms/Button/Button';
import './Header.css';

// Definición de tipos para las props
interface HeaderProps {
  searchValue: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  cartItemCount: number;
  onToggleCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  searchValue, 
  onSearchChange, 
  onSearch, 
  cartItemCount,
  onToggleCart 
}) => {
  // Podemos definir constantes para valores que se repiten
  const userIconName: IconName = 'user';
  const cartIconName: IconName = 'cart';
  
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Text variant="title" aria-label="Atomic Shop">
              AtomicShop
            </Text>
            <Text variant="caption" color="light">
              React + Atomic Design
            </Text>
          </div>
          
          <div className="header-search" role="search">
            <SearchBar 
              value={searchValue}
              onChange={onSearchChange}
              onSearch={onSearch}
            />
          </div>
          
          <div className="header-actions">
            <Button variant="secondary" aria-label="Mi cuenta">
              <Icon name={userIconName} /> Mi cuenta
            </Button>
            <div 
              className="cart-button" 
              onClick={onToggleCart}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onToggleCart();
                }
              }}
              aria-label={`Carrito de compras con ${cartItemCount} items`}
            >
              <Icon name={cartIconName} size="large" />
              {cartItemCount > 0 && (
                <span 
                  className="cart-badge"
                  aria-label={`${cartItemCount} items en el carrito`}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;