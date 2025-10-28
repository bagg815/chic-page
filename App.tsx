
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { products as initialProducts } from './data/products';
import { Product, CartItem } from './types';

export default function App() {
  const [products] = useState<Product[]>(initialProducts);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleAddToCart = useCallback((productToAdd: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...productToAdd, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const handleRemoveFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const handleUpdateQuantity = useCallback((productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  }, [handleRemoveFromCart]);

  const toggleCart = useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header cartCount={cartCount} onCartClick={toggleCart} />
      <main className="flex-grow">
        <Hero />
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}
