import React, { useEffect, useState } from 'react';

const ManagementPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [assetValue, setAssetValue] = useState(10000000); 
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const projectedROI = (assetValue * 0.184).toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Sophisticated Corporate Interior" 
            className="w-full h-full object-cover origin-center will-change-transform" 
            style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.15)` }}
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
          />
          <div className="absolute inset-0 bg-brand-blue/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-brand-blue/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 bg-brand-blue/40 backdrop-blur-md px-5 py-2.5 rounded-sm border border-primary/20 opacity-0 animate-fade-in-up">
              Portfolio Strategy & Concierge
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-2xl opacity-0 animate-fade-in-up-delay-1">
              Eyes on Market,<br/> <span className="text-primary italic">Focus on You.</span>
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed font-light max-w-2xl border-l-2 border-primary/50 pl-8 opacity-0 animate-fade-in-up-delay-2">
              Bespoke management for high-net-worth portfolios. We deploy data-driven insights to safeguard and maximize your real estate legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in-up-delay-3">
              <button className="bg-primary hover:bg-white text-brand-blue px-10 py-5 rounded-sm text-xs font-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-primary/20 uppercase tracking-[0.3em]">
                Request Appraisal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Analytics Section */}
      <section id="roi" className="py-32 bg-white dark:bg-background-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-brand-blue dark:text-white leading-tight">Yield Optimization.<br /><span className="text-primary italic font-light">Performance without compromise.</span></h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-12 leading-relaxed font-light">
                Our proprietary modeling focuses on arbitrage opportunities in the ultra-luxury segment. Estimate your potential gains below.
              </p>
              
              <div className="space-y-10 bg-background-light dark:bg-zinc-900/50 p-10 rounded-sm border border-primary/10 shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Asset Value</label>
                    <span className="text-xl font-serif font-bold dark:text-white text-brand-blue">${(assetValue / 1000000).toFixed(0)}M</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000000" 
                    max="50000000" 
                    step="1000000"
                    value={assetValue}
                    onChange={(e) => setAssetValue(parseInt(e.target.value))}
                    className="w-full h-1 bg-primary/10 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white dark:bg-background-dark rounded-sm shadow-xl border-l-2 border-primary">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Annual Revenue Projection</p>
                    <p className="text-3xl font-serif font-bold text-brand-blue dark:text-white">${projectedROI}</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-background-dark rounded-sm shadow-xl border-l-2 border-brand-blue dark:border-primary/40">
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-2">Target Annual Yield</p>
                    <p className="text-3xl font-serif font-bold text-brand-blue dark:text-white">18.4%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue p-10 rounded-sm border border-primary/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6">
                <span className="text-[9px] font-black text-brand-blue bg-primary px-4 py-1.5 rounded-sm uppercase tracking-widest">Active Benchmarks</span>
              </div>
              <div className="space-y-10 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-sm border border-white/5 text-center group-hover:bg-white/10 transition-colors">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 block mb-2 font-bold">Occupancy Rate</span>
                    <span className="text-2xl font-bold text-primary">98.2%</span>
                  </div>
                  <div className="p-6 bg-white/5 rounded-sm border border-white/5 text-center group-hover:bg-white/10 transition-colors">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 block mb-2 font-bold">Capital Appreciation</span>
                    <span className="text-2xl font-bold text-green-400">+12.5%</span>
                  </div>
                </div>
                <div className="p-10 bg-white/5 rounded-sm text-center border border-primary/20 relative">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2 font-bold">Global Assets Under Management</p>
                  <h3 className="text-5xl font-serif font-bold text-white tracking-tight">$1.48<span className="text-primary italic">B+</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-32 bg-background-light dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-4xl font-serif font-bold mb-8 dark:text-white text-brand-blue">Partner with Excellence.</h2>
              <p className="text-brand-blue/70 dark:text-gray-400 text-lg mb-12 font-light leading-relaxed">
                Management of high-value assets requires discretion and surgical precision. Connect with our partnership team for a confidential review of your portfolio.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-icons text-primary">mail</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Inquiries</p>
                    <p className="text-lg font-bold dark:text-white text-brand-blue">partnerships@de-eyeson.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-blue p-12 rounded-sm shadow-3xl border border-primary/10 relative">
              {isSubmitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <span className="material-icons text-primary text-7xl mb-6">verified</span>
                  <h3 className="text-white text-3xl font-serif font-bold mb-3 tracking-tight">Transmission Received</h3>
                  <p className="text-white/50 text-sm font-light uppercase tracking-widest">A senior partner will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[9px] font-bold text-primary uppercase tracking-[0.3em] mb-3">Full Identity</label>
                      <input required type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-white/20" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-bold text-primary uppercase tracking-[0.3em] mb-3">Electronic Mail</label>
                      <input required type="email" placeholder="email@address.com" className="w-full bg-white/5 border border-white/10 rounded-sm p-4 focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-white/20" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-primary uppercase tracking-[0.3em] mb-3">Portfolio Tier</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-sm p-4 focus:ring-1 focus:ring-primary outline-none text-white appearance-none cursor-pointer">
                      <option className="text-brand-blue">$2M - $10M Portfolio</option>
                      <option className="text-brand-blue">$10M - $50M Portfolio</option>
                      <option className="text-brand-blue">$50M+ Tier</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-white text-brand-blue font-black py-5 rounded-sm transition-all uppercase tracking-[0.4em] text-[10px] shadow-2xl">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brand-blue text-white py-20 border-t-2 border-primary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="mb-10">
                <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">De Eyeson <span className="text-primary">Realty</span></span>
              </div>
              <p className="text-white/40 max-w-sm mb-10 font-light text-sm leading-relaxed">
                The global standard for discrete asset management. We prioritize the preservation of capital and the optimization of luxury real estate portfolios.
              </p>
            </div>
            <div className="flex flex-wrap gap-10 text-[9px] font-black text-white/30 uppercase tracking-[0.5em] justify-end items-end">
              <span>Mayfair</span>
              <span>Tribeca</span>
              <span>Downtown Dubai</span>
              <span>Beverly Hills</span>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 text-center text-white/20 text-[9px] uppercase tracking-[0.4em]">
            © 2024 De Eyeson Realty. Proprietary & Confidential.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManagementPage;