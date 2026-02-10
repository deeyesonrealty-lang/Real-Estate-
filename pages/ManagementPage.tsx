import React, { useEffect, useState } from 'react';

const ManagementPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [assetValue, setAssetValue] = useState(10000000); // 10M default
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
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/20 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  <path d="M20 80V35L35 30V80H20Z" fill="#0c2b4d" />
                  <path d="M38 80V20L58 15V80H38Z" fill="#0c2b4d" />
                  <path d="M62 80V25L80 30V80H62Z" fill="#0c2b4d" />
                  <path d="M5 82C30 95 70 95 95 75" stroke="#cfa144" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M15 85C35 92 65 92 85 78" stroke="#f1d692" strokeWidth="1" strokeLinecap="round" fill="none" />
               </svg>
            </div>
            <div className="flex flex-col justify-center">
               <div className="flex items-baseline leading-none">
                  <span className="text-xl font-bold tracking-tight text-brand-blue dark:text-white font-display">De EYESON</span>
                  <span className="text-xl font-light tracking-widest text-brand-blue dark:text-white ml-1.5 font-display">REALTY</span>
               </div>
               <span className="text-[0.6rem] tracking-widest text-primary font-serif italic mt-0.5">eyes on the market, focus on you</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#roi" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors dark:text-gray-200 text-brand-blue">Management</a>
            <a href="#roi" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors dark:text-gray-200 text-brand-blue">ROI Calculator</a>
            <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-blue/20 hover:-translate-y-0.5 border-b-2 border-primary">
              List Property
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Modern Interior" 
            className="w-full h-full object-cover origin-center will-change-transform" 
            style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600" 
          />
          <div className="absolute inset-0 bg-brand-blue/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 bg-brand-blue/80 backdrop-blur px-4 py-2 rounded-sm border border-primary/30 opacity-0 animate-fade-in-up">Elite Property Management</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl opacity-0 animate-fade-in-up-delay-1">
              Eyes on the Market,<br/> <span className="text-primary italic">Focus on You.</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl border-l-4 border-primary pl-6 opacity-0 animate-fade-in-up-delay-2">
              Bespoke concierge services and data-driven insights to maximize returns on high-end real estate portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up-delay-3">
              <button className="bg-primary hover:bg-white hover:text-brand-blue text-brand-blue px-8 py-4 rounded-sm text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 uppercase tracking-widest">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Analytics Section */}
      <section id="roi" className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-brand-blue dark:text-white">ROI Calculator. <br /><span className="text-primary italic">Estimate Your Gains.</span></h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Adjust the slider to see how our management strategy typically performs based on your property value.
              </p>
              
              <div className="space-y-8 bg-background-light dark:bg-zinc-800 p-8 rounded-xl border border-primary/10">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-4">Estimated Asset Value: ${assetValue.toLocaleString()}</label>
                  <input 
                    type="range" 
                    min="1000000" 
                    max="50000000" 
                    step="1000000"
                    value={assetValue}
                    onChange={(e) => setAssetValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-2 uppercase tracking-tighter">
                    <span>$1M</span>
                    <span>$50M+</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border-l-4 border-primary">
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Projected Annual Revenue</p>
                    <p className="text-2xl font-serif font-bold text-brand-blue dark:text-white">${projectedROI}</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border-l-4 border-brand-blue">
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Target Yield</p>
                    <p className="text-2xl font-serif font-bold text-brand-blue dark:text-white">18.4%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-blue text-white p-8 rounded-sm border border-primary/20 shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold text-brand-blue bg-primary px-3 py-1 rounded-sm uppercase tracking-wider">Live Portfolio Data</span>
              </div>
              <div className="space-y-8 mt-4">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">Portfolio Yield</span>
                    <span className="text-3xl font-serif font-bold text-primary">18.4%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Occupancy</span>
                    <span className="text-xl font-bold text-primary">98.2%</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Growth</span>
                    <span className="text-xl font-bold text-green-400">+12.5%</span>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-sm text-center border border-primary/30">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Total Assets Managed</p>
                  <h3 className="text-4xl font-serif font-bold text-white">$1.4B+</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 dark:text-white text-brand-blue">Partner With Us</h2>
              <p className="text-brand-blue/70 text-lg mb-10 leading-relaxed">
                Ready to elevate your property's performance? Fill out the form below for a confidential appraisal.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-icons text-primary">mail</span>
                  <div>
                    <p className="text-sm font-bold dark:text-white text-brand-blue">Email Inquiries</p>
                    <p className="text-gray-500">partnerships@de-eyeson.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-blue p-8 rounded-sm shadow-2xl border border-primary/20 relative">
              {isSubmitted ? (
                <div className="h-[400px] flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <span className="material-icons text-primary text-6xl mb-4">check_circle</span>
                  <h3 className="text-white text-2xl font-serif font-bold mb-2">Request Received</h3>
                  <p className="text-white/60">A senior partner will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Full Name</label>
                      <input required type="text" placeholder="Enter name" className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-white/30" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Email</label>
                      <input required type="email" placeholder="Email@example.com" className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder-white/30" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Estimated Value</label>
                    <select className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-1 focus:ring-primary outline-none text-white">
                      <option className="text-brand-blue">$2M - $5M</option>
                      <option className="text-brand-blue">$5M - $10M</option>
                      <option className="text-brand-blue">$10M+</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-white text-brand-blue font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-sm shadow-lg shadow-black/20">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-16 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg font-bold tracking-tight uppercase">De EYESON <span className="text-primary">REALTY</span></span>
              </div>
              <p className="text-white/60 max-w-sm mb-6 font-light">
                Excellence in luxury property management. We safeguard your assets and optimize your returns through discrete, expert management.
              </p>
            </div>
            <div className="flex gap-8 text-xs font-bold text-white/40 uppercase tracking-widest justify-end items-end">
              <span>London</span>
              <span>New York</span>
              <span>Dubai</span>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-white/40 text-xs">
            © 2024 De Eyeson Realty. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManagementPage;