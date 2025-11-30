import React from 'react';
import { ZodiacSign } from '../types';
import { REGULAR_PRICE, SALE_PRICE } from '../constants';

interface ProductCardProps {
  sign: ZodiacSign;
  onAddToCart: (sign: ZodiacSign) => void;
  onPreview: (sign: ZodiacSign) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ sign, onAddToCart, onPreview }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1">
      
      {/* Image Area */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-800 relative">
        <img
          src={`https://picsum.photos/seed/${sign.imageSeed}/800/600`}
          alt={`${sign.name} zodiac`}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-serif text-white tracking-wide drop-shadow-lg">{sign.name}</h3>
          <p className="text-xs text-amber-300 uppercase tracking-widest font-bold drop-shadow-md">{sign.dateRange}</p>
        </div>
        <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/80 text-purple-200 border border-purple-500/30 backdrop-blur-sm">
                {sign.element}
            </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        
        {/* Keywords */}
        <div className="flex flex-wrap gap-2">
          {sign.keywords.map(k => (
            <span key={k} className="text-[10px] uppercase tracking-wider text-slate-400 border border-slate-700 px-2 py-1 rounded">
              {k}
            </span>
          ))}
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
            Unlock the mysteries of 2026. Your comprehensive guide to love, career, and spiritual growth.
        </p>

        {/* Price Block */}
        <div className="mt-auto pt-4 border-t border-slate-800/50 flex items-end justify-between">
            <div className="flex flex-col">
                <span className="text-sm text-slate-500 line-through decoration-slate-500 decoration-1">${REGULAR_PRICE.toFixed(2)}</span>
                <span className="text-xl font-bold text-white">${SALE_PRICE.toFixed(2)}</span>
            </div>
            <button 
                onClick={() => onAddToCart(sign)}
                className="bg-slate-100 text-slate-950 hover:bg-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-white/5 active:scale-95"
            >
                Add to Cart
            </button>
        </div>
        
        {/* AI Teaser Trigger */}
        <button 
            onClick={() => onPreview(sign)}
            className="w-full text-xs text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1 mt-2 py-1 transition-colors group-hover:underline decoration-purple-500/50 underline-offset-4"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.96l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.96 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.96l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.529.53l-2.051.682a1 1 0 000 1.898l2.051.682a1 1 0 01.529.53l.682 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.529-.53l2.051-.682a1 1 0 000-1.898l-2.051-.682a1 1 0 01-.529-.53l-.683-2.051z" />
            </svg>
            Ask the Stars (Free Teaser)
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
