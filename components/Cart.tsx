import React from 'react';
import { CartItem } from '../types';
import { CloseIcon, TrashIcon } from './icons';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Cart Panel */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 id="cart-heading" className="text-lg font-medium text-stone-900">Shopping Cart</h2>
            <button onClick={onClose} className="text-stone-500 hover:text-stone-800" aria-label="Close cart">
              <CloseIcon />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center text-stone-500 mt-10">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <ul className="-my-6 divide-y divide-stone-200">
                {cartItems.map(item => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-200">
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center"/>
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-stone-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-stone-500">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded">
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-stone-600 hover:bg-stone-100" aria-label={`Decrease quantity of ${item.name}`}>-</button>
                          <p className="w-8 text-center" aria-live="polite">
                            <span className="sr-only">Quantity:</span>
                            {item.quantity}
                          </p>
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-stone-600 hover:bg-stone-100" aria-label={`Increase quantity of ${item.name}`}>+</button>
                        </div>
                        <div className="flex">
                          <button type="button" onClick={() => onRemove(item.id)} className="font-medium text-rose-600 hover:text-rose-500 flex items-center gap-1">
                            <TrashIcon /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-stone-200 py-6 px-6">
              <div className="flex justify-between text-base font-medium text-stone-900">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-stone-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-stone-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-stone-900">Checkout</a>
              </div>
              <div className="mt-4 flex justify-center text-center text-sm text-stone-500">
                <p>
                  or <button type="button" onClick={onClose} className="font-medium text-stone-700 hover:text-stone-900">Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
