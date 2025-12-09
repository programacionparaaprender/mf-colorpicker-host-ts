// src/components/pages/HomePage/HomePage.tsx
import React, { useState, useEffect, ChangeEvent } from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import Header from '../../organisms/Header/Header';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';
import ShoppingCart from '../../organisms/ShoppingCart/ShoppingCart';
import Text from '../../atoms/Text/Text';
import './HomePage.css';

// Tipos de datos
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  isFavorite: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

// Datos de ejemplo
const initialProducts: Product[] = [
  { id: 1, name: 'Laptop Gamer', price: 1299.99, description: 'Laptop de alto rendimiento para gaming', rating: 4, isFavorite: false },
  { id: 2, name: 'Smartphone Pro', price: 899.99, description: 'Teléfono inteligente con cámara profesional', rating: 5, isFavorite: true },
  { id: 3, name: 'Auriculares Bluetooth', price: 199.99, description: 'Auriculares con cancelación de ruido', rating: 4, isFavorite: false },
  { id: 4, name: 'Smartwatch', price: 299.99, description: 'Reloj inteligente con monitor de salud', rating: 3, isFavorite: false },
  { id: 5, name: 'Tablet 10"', price: 499.99, description: 'Tablet con pantalla retina', rating: 4, isFavorite: true },
  { id: 6, name: 'Cámara DSLR', price: 799.99, description: 'Cámara profesional para fotografía', rating: 5, isFavorite: false },
];

const HomePage: React.FC = () => {
  // Estados
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  
  // Actualizar contador del carrito
  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);
  
  // Manejar búsqueda
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    
    if (value.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => 
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  
  const handleSearch = (): void => {
    // La búsqueda ya se maneja en tiempo real con handleSearchChange
    console.log('Buscando:', searchValue);
  };
  
  // Manejar favoritos
  const handleToggleFavorite = (productId: number): void => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, isFavorite: !product.isFavorite } 
        : product
    ));
    
    setFilteredProducts(filteredProducts.map(product => 
      product.id === productId 
        ? { ...product, isFavorite: !product.isFavorite } 
        : product
    ));
  };
  
  // Manejar carrito
  const handleAddToCart = (product: Product): void => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  const handleUpdateQuantity = (productId: number, newQuantity: number): void => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const handleRemoveItem = (productId: number): void => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  
  const handleCheckout = (): void => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`¡Gracias por tu compra! Total: $${total.toFixed(2)}`);
    setCartItems([]);
    setIsCartOpen(false);
  };
  
  // Crear componentes
  const headerComponent = (
    <Header
      searchValue={searchValue}
      onSearchChange={handleSearchChange}
      onSearch={handleSearch}
      cartItemCount={cartItemCount}
      onToggleCart={() => setIsCartOpen(!isCartOpen)}
    />
  );
  
  const mainContentComponent = (
    <div className="homepage-content">
      <div className="page-title">
        <Text variant="title">Productos Destacados</Text>
        <Text variant="body" color="light">
          {filteredProducts.length} productos encontrados
        </Text>
      </div>
      
      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
  
  const footerComponent = (
    <div className="footer">
      <div className="container">
        <Text variant="body" color="light">
          AtomicShop - Ejemplo de React con Atomic Design © {new Date().getFullYear()}
        </Text>
      </div>
    </div>
  );
  
  return (
    <>
      <MainLayout
        header={headerComponent}
        mainContent={mainContentComponent}
        footer={footerComponent}
      />
      
      <ShoppingCart
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </>
  );
};

export default HomePage;