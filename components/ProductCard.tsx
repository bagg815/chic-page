
import React from 'react';
import { Product } from '../types';
import { PlusIcon } from './icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative flex flex-col">
      <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden rounded-lg bg-stone-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-stone-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-stone-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-stone-900">${product.price.toFixed(2)}</p>
      </div>
       <button 
        onClick={() => onAddToCart(product)}
        className="mt-4 flex w-full items-center justify-center rounded-md border border-transparent bg-stone-800 py-2 px-8 text-sm font-medium text-white hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
       >
         Add to Cart <PlusIcon />
       </button>
    </div>
  );
};

export default ProductCard;
