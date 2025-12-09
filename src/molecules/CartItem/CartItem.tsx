// src/components/molecules/CartItem/CartItem.tsx
import React from 'react';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import './CartItem.css';

// Definir interfaz para CartItem (versión mínima para este componente)
interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Definición de tipos para las props
interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const { id, name, price, quantity } = item;
  
  // Calcular el total para este ítem
  const itemTotal = price * quantity;
  
  // Manejar incremento de cantidad
  const handleIncrement = (): void => {
    onUpdateQuantity(id, quantity + 1);
  };
  
  // Manejar decremento de cantidad
  const handleDecrement = (): void => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    } else {
      onRemove(id);
    }
  };
  
  // Manejar eliminación del ítem
  const handleRemove = (): void => {
    onRemove(id);
  };
  
  return (
    <div 
      className="cart-item" 
      role="listitem"
      aria-label={`${quantity} ${name} a $${price.toFixed(2)} cada uno, total: $${itemTotal.toFixed(2)}`}
    >
      <div className="cart-item-info">
        <Text variant="subtitle" aria-label={`Producto: ${name}`}>
          {name}
        </Text>
        <Text variant="body" color="primary" aria-label={`Precio unitario: $${price.toFixed(2)}`}>
          ${price.toFixed(2)} c/u
        </Text>
      </div>
      <div className="cart-item-controls" aria-label={`Controles de cantidad para ${name}`}>
        <Button 
          variant="secondary" 
          onClick={handleDecrement}
          aria-label={`Disminuir cantidad de ${name}`}
          size="small"
        >
          -
        </Button>
        <Text variant="body" bold aria-label={`Cantidad actual: ${quantity}`}>
          {quantity}
        </Text>
        <Button 
          variant="secondary" 
          onClick={handleIncrement}
          aria-label={`Aumentar cantidad de ${name}`}
          size="small"
        >
          +
        </Button>
        <Button 
          variant="secondary" 
          onClick={handleRemove}
          aria-label={`Eliminar ${name} del carrito`}
          size="small"
        >
          Eliminar
        </Button>
      </div>
      <div className="cart-item-total" aria-label={`Total para ${name}: $${itemTotal.toFixed(2)}`}>
        <Text variant="subtitle">${itemTotal.toFixed(2)}</Text>
      </div>
    </div>
  );
};

export default CartItem;