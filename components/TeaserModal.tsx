import React from 'react';
import { ZodiacSign } from '../types';

interface TeaserModalProps {
  isOpen: boolean;
  onClose: () => void;
  sign: ZodiacSign | null;
  content: string;
  isLoading: boolean;
}

const TeaserModal: React.FC<TeaserModalProps> = ({ isOpen, onClose, sign, content, isLoading }) => {
  if (!isOpen || !sign) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-purple-900/20 p-8 overflow-hidden transform transition-all scale-100">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-serif text-white">{sign.name} 2026 Glimpse</h3>
            <p className="text-slate-400 text-sm mt-1">AI-Powered Preview</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-[100px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-purple-300 animate-pulse">Consulting the stars...</p>
            </div>
          ) : (
            <div className="prose prose-invert">
              <p className="text-lg text-slate-200 italic leading-relaxed text-center font-serif">
                "{content}"
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={onClose}
            className="text-sm text-slate-400 hover:text-amber-400 transition underline underline-offset-4"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeaserModal;
