// src/components/organisms/ShoppingCart/ShoppingCart.tsx
import React, { MouseEvent } from 'react';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import CartItem from '../../molecules/CartItem/CartItem';
import './ShoppingCart.css';

// Definición de tipos para las props
interface ShoppingCartProps {
  cartItems: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

// Definir interfaz para CartItem (debería coincidir con la de HomePage)
interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  isFavorite: boolean;
  quantity: number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ 
  cartItems, 
  isOpen, 
  onClose, 
  onUpdateQuantity, 
  onRemoveItem, 
  onCheckout 
}) => {
  // Calcular total del carrito
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Si el carrito no está abierto, no renderizar nada
  if (!isOpen) return null;
  
  // Manejar clic en el overlay para cerrar el carrito
  const handleOverlayClick = (): void => {
    onClose();
  };
  
  // Manejar clic en el carrito para evitar que se cierre al hacer clic dentro
  const handleCartClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };
  
  return (
    <div className="shopping-cart-overlay" onClick={handleOverlayClick}>
      <div className="shopping-cart" onClick={handleCartClick}>
        <div className="cart-header">
          <Text variant="title">Carrito de Compras</Text>
          <button 
            className="cart-close" 
            onClick={onClose}
            aria-label="Cerrar carrito"
          >
            ×
          </button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <Text variant="body" color="light">Tu carrito está vacío</Text>
            </div>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <Text variant="body">Total:</Text>
              <Text variant="title" color="primary">${total.toFixed(2)}</Text>
            </div>
            <Button variant="success" onClick={onCheckout}>
              Proceder al Pago
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;