import React from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  variant?: 'solid' | 'transparent';
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme, variant = 'solid' }) => {
  const isTransparent = variant === 'transparent';
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isTransparent 
        ? 'bg-transparent border-transparent py-4' 
        : 'bg-white/90 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10 py-2 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />

        <div className="hidden md:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-primary transition-colors text-brand-blue dark:text-gray-300">Listings</a>
          <a href="#" className="hover:text-primary transition-colors text-brand-blue dark:text-gray-300">Concierge</a>
          <a href="#" className="hover:text-primary transition-colors text-brand-blue dark:text-gray-300">Our Story</a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-brand-blue dark:text-primary"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-icons text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-brand-blue text-white px-6 py-2 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg shadow-brand-blue/20">
            Contact Agent
          </button>
        </div>
      </div>
    </nav>
  );
};
