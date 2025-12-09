// src/components/organisms/ProductGrid/ProductGrid.tsx
import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import Text from '../../atoms/Text/Text';
import './ProductGrid.css';

// Definición de tipos para las props
interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: number) => void;
}

// Definir interfaz para Product (debería coincidir con la de HomePage)
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  isFavorite: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart, 
  onToggleFavorite 
}) => {
  // Si no hay productos, mostrar mensaje
  if (products.length === 0) {
    return (
      <div className="product-grid-empty">
        <Text variant="title">No hay productos disponibles</Text>
        <Text variant="body" color="light">
          Intenta con otros términos de búsqueda
        </Text>
      </div>
    );
  }
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductGrid;