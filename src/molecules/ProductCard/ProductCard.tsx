// src/components/molecules/ProductCard/ProductCard.tsx
import React from 'react';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import './ProductCard.css';

// Definir interfaz para Product (coincide con otras definiciones)
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  isFavorite: boolean;
}

// Definición de tipos para las props
interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite 
}) => {
  const { id, name, price, description, rating, isFavorite } = product;
  
  // Crear array de 5 elementos para las estrellas
  const stars = Array.from({ length: 5 }, (_, index) => index);
  
  // Manejar clic en favorito
  const handleFavoriteClick = (): void => {
    onToggleFavorite(id);
  };
  
  // Manejar clic en agregar al carrito
  const handleAddToCartClick = (): void => {
    onAddToCart(product);
  };
  
  return (
    <div className="product-card" role="article" aria-label={`Producto: ${name}`}>
      <div className="product-image">
        <button 
          className="product-favorite"
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? `Quitar ${name} de favoritos` : `Agregar ${name} a favoritos`}
          type="button"
        >
          <Icon name="heart" color={isFavorite ? '#ff4757' : '#ccc'} />
        </button>
        <div className="image-placeholder" aria-hidden="true">
          <Text variant="title">{name.charAt(0)}</Text>
        </div>
      </div>
      <div className="product-info">
        <Text variant="subtitle" aria-label={`Nombre: ${name}`}>{name}</Text>
        <Text variant="body" color="light" aria-label={`Descripción: ${description}`}>
          {description}
        </Text>
        <div className="product-rating" aria-label={`Calificación: ${rating} de 5 estrellas`}>
          {stars.map(index => (
            <Icon 
              key={index} 
              name="star" 
              size="small" 
              color={index < rating ? '#ffc107' : '#ddd'} 
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="product-footer">
          <Text variant="title" color="primary" aria-label={`Precio: $${price.toFixed(2)}`}>
            ${price.toFixed(2)}
          </Text>
          <Button 
            variant="success" 
            onClick={handleAddToCartClick}
            aria-label={`Agregar ${name} al carrito`}
          >
            <Icon name="cart" /> Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;