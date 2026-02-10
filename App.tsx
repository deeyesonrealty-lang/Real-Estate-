import React, { useState } from 'react';
import ListingPage from './pages/ListingPage';
import ManagementPage from './pages/ManagementPage';

type View = 'listing' | 'management';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('listing');

  // Simple floating switcher for demonstration purposes to toggle between the two designs
  const ViewSwitcher = () => (
    <div className="fixed bottom-6 right-6 z-[100] flex bg-white/90 dark:bg-background-dark/90 backdrop-blur shadow-2xl rounded-full p-1 border border-primary/20">
      <button
        onClick={() => setCurrentView('listing')}
        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
          currentView === 'listing'
            ? 'bg-primary text-white shadow-lg'
            : 'text-gray-500 hover:text-primary'
        }`}
      >
        Listing View
      </button>
      <button
        onClick={() => setCurrentView('management')}
        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
          currentView === 'management'
            ? 'bg-primary text-white shadow-lg'
            : 'text-gray-500 hover:text-primary'
        }`}
      >
        Management Portal
      </button>
    </div>
  );

  return (
    <>
      {currentView === 'listing' ? <ListingPage /> : <ManagementPage />}
      <ViewSwitcher />
    </>
  );
}