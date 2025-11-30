import React from 'react';

interface NavBarProps {
  cartCount: number;
  onCartClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ cartCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-purple-600 animate-pulse"></div>
            <span className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-purple-200">
              CELESTIA
            </span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-300 hover:text-white transition hidden sm:block">
              About 2026
            </button>
            <button className="text-slate-300 hover:text-white transition hidden sm:block">
              Testimonials
            </button>
            <button 
              onClick={onCartClick}
              className="relative p-2 text-slate-200 hover:text-amber-400 transition"
              aria-label="Open Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-slate-900 transform translate-x-1/4 -translate-y-1/4 bg-amber-400 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
