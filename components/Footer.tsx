import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-2xl font-serif text-slate-500 mb-4">CELESTIA</h3>
        <p className="text-slate-600 text-center max-w-md mb-8">
          Guiding your path through the cosmos with ancient wisdom and modern clarity.
          All forecasts are delivered digitally as comprehensive PDF guides.
        </p>
        <div className="flex gap-6 text-slate-500 text-sm">
          <a href="#" className="hover:text-amber-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-amber-500 transition">Terms of Service</a>
          <a href="#" className="hover:text-amber-500 transition">Contact Support</a>
        </div>
        <div className="mt-8 text-slate-700 text-xs">
          &copy; {new Date().getFullYear()} Celestia Astrology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
