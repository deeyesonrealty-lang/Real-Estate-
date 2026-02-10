import React, { useState, useEffect } from 'react';
import ListingPage from './pages/ListingPage';
import ManagementPage from './pages/ManagementPage';
import { Navbar } from './components/Navbar';

type View = 'listing' | 'management';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('listing');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const ViewSwitcher = () => (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex bg-white/95 dark:bg-background-dark/95 backdrop-blur-xl shadow-2xl rounded-full p-1.5 border border-primary/20 ring-1 ring-black/5">
      <button
        onClick={() => setCurrentView('listing')}
        className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
          currentView === 'listing'
            ? 'bg-brand-blue text-white shadow-lg scale-105'
            : 'text-gray-500 dark:text-gray-400 hover:text-primary'
        }`}
      >
        Public Listing
      </button>
      <button
        onClick={() => setCurrentView('management')}
        className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
          currentView === 'management'
            ? 'bg-brand-blue text-white shadow-lg scale-105'
            : 'text-gray-500 dark:text-gray-400 hover:text-primary'
        }`}
      >
        Management Portal
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-500">
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        variant={currentView === 'management' ? 'transparent' : 'solid'} 
      />
      
      <main className={currentView === 'management' ? '' : 'pt-20'}>
        {currentView === 'listing' ? <ListingPage /> : <ManagementPage />}
      </main>

      <ViewSwitcher />
    </div>
  );
}
