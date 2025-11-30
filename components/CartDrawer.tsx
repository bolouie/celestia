import React from 'react';
import { CartItem } from '../types';
import { SALE_PRICE } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (SALE_PRICE * item.quantity), 0);

  return (
    <div className={`fixed inset-0 z-[60] overflow-hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div 
        className={`absolute inset-0 bg-slate-950/80 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose}
      />
      
      <div className={`absolute inset-y-0 right-0 max-w-md w-full flex transition-transform duration-500 sm:pl-10 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-full flex flex-col bg-slate-900 border-l border-slate-800 shadow-2xl">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-serif font-medium text-white">Shopping Cart</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-white">
                <span className="sr-only">Close panel</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-8">
              {items.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-slate-500">Your spiritual journey awaits. <br/> Cart is empty.</p>
                </div>
              ) : (
                <ul className="-my-6 divide-y divide-slate-800">
                  {items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-700 bg-slate-800">
                        <img
                          src={`https://picsum.photos/seed/${item.imageSeed}/200/200`}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-white">
                            <h3>{item.name} 2026 Forecast</h3>
                            <p className="ml-4">${SALE_PRICE.toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-slate-400">{item.dateRange}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-slate-400">Qty {item.quantity}</p>
                          <button
                            type="button"
                            onClick={() => onRemove(item.id)}
                            className="font-medium text-amber-500 hover:text-amber-400"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {items.length > 0 && (
            <div className="border-t border-slate-800 py-6 px-4 sm:px-6 bg-slate-900">
              <div className="flex justify-between text-base font-medium text-white">
                <p>Subtotal</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-slate-400">Digital delivery via email immediately after purchase.</p>
              <div className="mt-6">
                <button
                  onClick={() => alert("Proceeding to checkout mock...")}
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-amber-500 px-6 py-3 text-base font-medium text-slate-900 shadow-sm hover:bg-amber-400 transition"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
