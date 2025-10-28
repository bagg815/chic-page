
import React from 'react';
import { CartIcon } from './icons';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-stone-50/80 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold tracking-tight text-stone-900">
              Chic Threads
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a href="#" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Home</a>
            <a href="#products" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Shop</a>
            <a href="#" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Our Story</a>
            <a href="#" className="text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center">
            <button
              onClick={onCartClick}
              className="relative p-2 text-stone-600 hover:text-stone-900 focus:outline-none transition-colors"
              aria-label="Open cart"
            >
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
