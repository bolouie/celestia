import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import TeaserModal from './components/TeaserModal';
import { ZODIAC_SIGNS } from './constants';
import { CartItem, ZodiacSign } from './types';
import { generateForecastTeaser } from './services/geminiService';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Teaser Modal State
  const [teaserSign, setTeaserSign] = useState<ZodiacSign | null>(null);
  const [teaserContent, setTeaserContent] = useState<string>("");
  const [isLoadingTeaser, setIsLoadingTeaser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (sign: ZodiacSign) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === sign.id);
      if (existing) {
        return prev.map((item) =>
          item.id === sign.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...sign, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePreview = async (sign: ZodiacSign) => {
    setTeaserSign(sign);
    setIsModalOpen(true);
    setTeaserContent("");
    setIsLoadingTeaser(true);

    const teaser = await generateForecastTeaser(sign.name);
    setTeaserContent(teaser);
    setIsLoadingTeaser(false);
  };

  const closePreview = () => {
    setIsModalOpen(false);
    // Brief timeout to clear state after animation would ideally finish
    setTimeout(() => {
        setTeaserSign(null);
        setTeaserContent("");
    }, 300);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
      <NavBar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-4 block">Limited Time Offer</span>
          <h1 className="text-5xl sm:text-7xl font-serif font-medium text-white mb-6 tracking-tight">
            2026 Celestial Blueprint
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Navigate the year ahead with precision. 
            Detailed annual readings for love, wealth, and destiny.
          </p>
          <div className="mt-8 flex justify-center gap-4">
             <span className="inline-flex items-center px-4 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm">
                ✨ Digital PDF Delivery
             </span>
             <span className="inline-flex items-center px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
                🔮 40+ Pages Per Sign
             </span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ZODIAC_SIGNS.map((sign) => (
              <ProductCard 
                key={sign.id} 
                sign={sign} 
                onAddToCart={handleAddToCart}
                onPreview={handlePreview}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={handleRemoveFromCart}
      />

      <TeaserModal 
        isOpen={isModalOpen}
        onClose={closePreview}
        sign={teaserSign}
        content={teaserContent}
        isLoading={isLoadingTeaser}
      />
    </div>
  );
};

export default App;
