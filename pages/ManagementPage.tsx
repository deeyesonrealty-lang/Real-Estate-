import React, { useEffect, useState } from 'react';

const ManagementPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/20 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            {/* Logo Icon SVG */}
            <div className="relative w-12 h-12 flex-shrink-0">
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  {/* Buildings */}
                  <path d="M20 80V35L35 30V80H20Z" fill="#0c2b4d" />
                  <path d="M38 80V20L58 15V80H38Z" fill="#0c2b4d" />
                  <path d="M62 80V25L80 30V80H62Z" fill="#0c2b4d" />
                  {/* Building Details (Windows) */}
                  <rect x="42" y="25" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="30" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="35" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="40" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="45" width="12" height="1.5" fill="#587ea3" />
                  {/* Gold Swoosh */}
                  <path d="M5 82C30 95 70 95 95 75" stroke="#cfa144" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M15 85C35 92 65 92 85 78" stroke="#f1d692" strokeWidth="1" strokeLinecap="round" fill="none" />
               </svg>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col justify-center">
               <div className="flex items-baseline leading-none">
                  <span className="text-xl font-bold tracking-tight text-brand-blue dark:text-white font-display">De EYESON</span>
                  <span className="text-xl font-light tracking-widest text-brand-blue dark:text-white ml-1.5 font-display">REALTY</span>
               </div>
               <span className="text-[0.6rem] tracking-widest text-primary font-serif italic mt-0.5">eyes on the market, focus on you</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors dark:text-gray-200 text-brand-blue">Management</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors dark:text-gray-200 text-brand-blue">ROI Calculator</a>
            <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors dark:text-gray-200 text-brand-blue">Partners</a>
            <button className="bg-brand-blue hover:bg-brand-blue/90 text-white px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-brand-blue/20 hover:-translate-y-0.5 border-b-2 border-primary">
              List Your Property
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgtBO0c0l4iFlovqOOpMT8t3IVJLzkhuY3bap5GkshR44iDLFA7DnGj0M_IEpN2NC21vQgJgXVPbt34ZW-tEfrmMRA9MhHaAflnc1sd9Ae-qgFCbseXwP62XYFItE6fVPQrKNCEQZs3DQ2PEj3t1ecV1-vwnpCYuURLQcyihmA9rLiikNwOrRykXLB625ts0svRI-951utZN39Ai4ZpJagGl37J6a8UhiAlLpSUFAzNCmUfMILOPA-7sby5ErDt-AvJeFYATPp0miQ" 
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
              We combine data-driven insights with bespoke concierge services to deliver unparalleled returns on high-end real estate portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up-delay-3">
              <button className="bg-primary hover:bg-white hover:text-brand-blue text-brand-blue px-8 py-4 rounded-sm text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 uppercase tracking-widest">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-brand-blue/40 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm text-lg font-bold transition-all uppercase tracking-widest">
                View ROI Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Analytics Section */}
      <section className="py-24 bg-white dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 text-brand-blue dark:text-white">Quantifiable Returns. <br /><span className="text-primary italic">Zero Hassle.</span></h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Our management strategy consistently outperforms the market. By leveraging proprietary pricing algorithms and exclusive tenant vetting, we ensure your property remains a high-yielding investment.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 bg-brand-blue rounded-sm flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/20">
                    <span className="material-icons text-primary">trending_up</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white text-brand-blue">24% Average Yield Increase</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Our dynamic pricing model adjusts to market demands in real-time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors border border-transparent hover:border-primary/10">
                  <div className="w-12 h-12 bg-brand-blue rounded-sm flex items-center justify-center shrink-0 shadow-lg shadow-brand-blue/20">
                    <span className="material-icons text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white text-brand-blue">99.8% Tenant Retention</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">We source high-net-worth individuals who value your property as much as you do.</p>
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
                    <span className="text-sm font-bold uppercase tracking-widest text-white/60">Projected Annual ROI</span>
                    <span className="text-3xl font-serif font-bold text-primary">18.4%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary shadow-[0_0_10px_rgba(236,182,19,0.5)]" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Portfolio Growth</span>
                    <span className="text-xl font-bold text-green-400">+12.5%</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-sm border border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-white/50 block mb-1">Occupancy Rate</span>
                    <span className="text-xl font-bold text-primary">98.2%</span>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-sm text-center border border-primary/30">
                  <p className="text-xs uppercase tracking-widest opacity-60 mb-1">Total Assets Under Management</p>
                  <h3 className="text-4xl font-serif font-bold text-white">$1.4B+</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Elements / Testimonials */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 dark:text-white text-brand-blue">Partnering with Excellence</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-xl mx-auto italic font-serif">Hear from property owners who have entrusted their most valuable assets to our care.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-sm shadow-sm border-t-4 border-primary flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <span className="material-icons text-brand-blue/20 text-6xl mb-4 -ml-2">format_quote</span>
                <p className="text-brand-blue dark:text-gray-300 mb-8 italic leading-relaxed -mt-4">
                  "De Eyeson Realty has completely transformed how I view my property portfolio. Their attention to detail and concierge-level service is something I hadn't found elsewhere."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img alt="John Smith" className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ASoEkwQ6Q3RjKiMCPJKs7xwSIn35QcBKunJI_ZGmdOmeksOPwhgjqQi507hvBI7unkcQ_JEP0osa7nAe77sjcr5vP9mng5REwwhaMznlvzDYEBxN6m0TS1r1LMJ3OhKUdRQeScEWR_gFiwmJR6XJlHih1BRGxpqru_hv0_0vIoyO0Aq6ZVKuzyiFfdC455q2XAg9kcue51Gin_RU4IF-FBMMhkl3Lbp6wC4QbGajFO9kBZ0g_x3ykkM6eQXQ3M5GemCD6ho00fjp" />
                <div>
                  <p className="font-bold text-sm dark:text-white text-brand-blue uppercase tracking-wider">David Henderson</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Estate Owner, London</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-sm shadow-sm border-t-4 border-primary flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <span className="material-icons text-brand-blue/20 text-6xl mb-4 -ml-2">format_quote</span>
                <p className="text-brand-blue dark:text-gray-300 mb-8 italic leading-relaxed -mt-4">
                  "Discretion was my top priority. The team handled everything with the utmost professionalism, and the ROI has consistently exceeded my expectations."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img alt="Sarah Miller" className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3iy7KzBvm_TZYyBmxCqYOBvW4SiwrTKdOQIv1P12EYLAqWoa_TJLsnki7qy8oaIdyU-s1PTT3s5sNC1CcgSkvz3ENuw-F_zuQrLDtJg0EdbrR7JQTwJmS-Mvp2ph9qbborv5-6f0UIUihKdO-hIxO1g6UMuxEDzsJyNTzHfx_4V9Go2By2e61ADcOWwQg0FlnFPuhsPtaZLdUZ3SUGV9o2oJqiNw7ENYxeHwJ1mgXzJqQemVFTt33bk09wzdQzQS2Al_Ig5s2p0IB" />
                <div>
                  <p className="font-bold text-sm dark:text-white text-brand-blue uppercase tracking-wider">Alexandra Sterling</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Penthouse Owner, Dubai</p>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-sm shadow-sm border-t-4 border-primary flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <span className="material-icons text-brand-blue/20 text-6xl mb-4 -ml-2">format_quote</span>
                <p className="text-brand-blue dark:text-gray-300 mb-8 italic leading-relaxed -mt-4">
                  "The reporting is transparent and incredibly detailed. I feel fully in control of my investment without having to manage a single phone call myself."
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img alt="Michael Ross" className="w-12 h-12 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkzPMRuaQty2t5d1SQCc-5v5QenpcTDqZnh3mRSxFmam7KJAntGFvbthSKvk7ZOs_3z3DrzFUFmogoIEpEjX00ZHtq1fsq6OWUWi_lAlww5qHO_09Cec_V5eQNUY9ICBeCSjgk9Kguvv9AJinRw6d_wbvQ7D6A-YHC02fbsrmXqExXG9PnfixlsQrYvTBIFsd5fcYBZ_sR-3wbQJHL_RmSz9By3yxaTAya6NhpB-d9FK3h7c6phL0xRk8V5qqp60fgiLohB0hwun7A" />
                <div>
                  <p className="font-bold text-sm dark:text-white text-brand-blue uppercase tracking-wider">Julian Ross</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Villa Portfolio, Geneva</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6 dark:text-white text-brand-blue">Partner With Us</h2>
              <p className="text-brand-blue/70 text-lg mb-10 leading-relaxed">
                Ready to elevate your property's performance? Fill out the form below for a confidential appraisal of your asset's potential under our management.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="material-icons text-primary">mail</span>
                  <div>
                    <p className="text-sm font-bold dark:text-white text-brand-blue">Email Inquiries</p>
                    <p className="text-gray-500">partnerships@de-eyeson.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-icons text-primary">location_on</span>
                  <div>
                    <p className="text-sm font-bold dark:text-white text-brand-blue">Global Headquarters</p>
                    <p className="text-gray-500">Mayfair, London • Knightsbridge Office</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-blue p-8 rounded-sm shadow-2xl border border-primary/20">
              <form action="#" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" placeholder="Enter name" className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-2 focus:ring-primary outline-none transition-all text-white placeholder-white/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" placeholder="Email@example.com" className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-2 focus:ring-primary outline-none transition-all text-white placeholder-white/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Property Location</label>
                  <input type="text" placeholder="City, Area" className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-2 focus:ring-primary outline-none transition-all text-white placeholder-white/30" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Estimated Asset Value</label>
                  <select className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none text-white">
                    <option className="text-brand-blue">$2M - $5M</option>
                    <option className="text-brand-blue">$5M - $10M</option>
                    <option className="text-brand-blue">$10M - $25M</option>
                    <option className="text-brand-blue">$25M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">Message (Optional)</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-white/10 border-none rounded-sm p-4 focus:ring-2 focus:ring-primary outline-none transition-all text-white placeholder-white/30"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-white text-brand-blue font-bold py-4 rounded-sm shadow-lg shadow-black/20 transition-all uppercase tracking-widest text-sm hover:-translate-y-0.5">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative group">
        <img 
          alt="Global Presence Map" 
          className="w-full h-full object-cover grayscale contrast-125" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQjtU8bay5dyKVTCarGnpKXjr2IemeEAzezAgI04KHXIw8EGYwgv5ODKuwRzMoYCseyciNLGTctaFQrteEhzkOFmtUjGqQ8DGcAHkelzMdCpRfczneRjdQXHGv6GpxdVbrk3hzGeKELhQYVHuJxD4ZItHodzpV7IzjgoieThEszqImP6V_m2vi6zsCQDOjrnnIA3kPz9nuUTJawjVvH5Qunqvf8ypvXyFNdeW_Juxofz_ybhQQKFXxG2x24GhmsggPsiNTzeCBmetB" 
        />
        <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply group-hover:bg-brand-blue/30 transition-colors duration-700"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-brand-blue/90 dark:bg-zinc-900/90 backdrop-blur p-6 rounded-sm shadow-xl text-center border border-white/20">
            <h3 className="text-xl font-bold mb-2 text-white">Global Network</h3>
            <p className="text-sm text-primary">Managing assets across 12 major financial hubs.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue text-white py-16 border-t-4 border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                  <span className="material-icons text-brand-blue text-sm">apartment</span>
                </div>
                <span className="text-lg font-bold tracking-tight uppercase">De EYESON <span className="text-primary">REALTY</span></span>
              </div>
              <p className="text-white/60 max-w-sm mb-6 font-light">
                Excellence in luxury property management. We safeguard your assets and optimize your returns through discrete, expert management.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-brand-blue transition-all group">
                  <span className="material-icons text-sm transition-colors">public</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-brand-blue transition-all group">
                  <span className="material-icons text-sm transition-colors">work</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-brand-blue transition-all group">
                  <span className="material-icons text-sm transition-colors">mail</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Services</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio Management</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Concierge Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Asset Appraisal</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tenant Sourcing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-primary">Company</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">© 2024 De Eyeson Realty. All rights reserved.</p>
            <div className="flex gap-8 text-xs font-bold text-white/40 uppercase tracking-widest">
              <span>London</span>
              <span>New York</span>
              <span>Dubai</span>
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ManagementPage;