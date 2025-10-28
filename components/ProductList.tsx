
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div id="products" className="bg-stone-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">New Arrivals</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-600">The latest styles, curated just for you.</p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
