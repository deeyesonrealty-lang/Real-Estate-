import React, { useState } from 'react';
import { Calendar } from 'lucide-react'; // Fallback icon if material icons fail, mostly using Material Icons classes from HTML

const ListingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/20 px-6 py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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

          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-gray-300">
            <a href="#" className="hover:text-primary transition-colors py-2">Listings</a>
            <a href="#" className="hover:text-primary transition-colors py-2">Concierge</a>
            <a href="#" className="hover:text-primary transition-colors py-2">Our Story</a>
            <a href="#" className="hover:text-primary transition-colors border-b-2 border-primary py-2">Penthouse Detail</a>
          </div>
          <button className="bg-brand-blue text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary transition-all shadow-lg shadow-brand-blue/20">
            Contact Agent
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:py-12">
        {/* Hero Gallery Section */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
          <div className="lg:col-span-3 h-[500px] relative rounded-xl overflow-hidden group">
            <img 
              alt="Main Living Space" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmbRxkSnPHJnAHcs4ov_WErIN2jiKD6ApIuCTRnGf81vLwxkbSmDpI_dgFpJ2Gg-8QROO1s53aQaqDQtcJzOhttA1O0HmECr3vmlwCBrn88an-CniTHbAihnwX4qJddx2769d5cNX8JsO20pleCx-yAvu7OJDRCr1ZHNAcReabMP_mvlD_G4CtaJxDx-0Kcjy1zqeex7-9MgCJrd4EUEwoP9hYu7cCTcadfJhpxsrvq1N4iaKN6kV8hiF6I_Tnry-rdSbiSQzZlCDg" 
            />
            <div className="absolute bottom-6 left-6 bg-brand-blue/90 dark:bg-background-dark/90 p-5 rounded-sm shadow-xl border-l-4 border-primary backdrop-blur-sm">
              <h1 className="text-3xl font-serif text-white">The Gilded Penthouse</h1>
              <p className="text-sm opacity-80 flex items-center mt-1 text-primary">
                <span className="material-icons text-primary text-base mr-1">place</span>
                Bel Air, Los Angeles, CA
              </p>
            </div>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4">
            <div className="rounded-xl overflow-hidden h-full">
              <img 
                alt="Master Bedroom" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMk9zzYJ5YdXaYpRM1RAs71rKPDl5KdZpWvo5GvvwYrB3r-iUk9ZtROkyNKaJ-EjoGQz2rc9oWFUjAgU_6M7Kir-bKMROxGjOq95rHBwe_muTWac_VmqVjvZ9JsUSGGBg1jJRSEeIP3qXjNkAOpo5f1W5BMMFKjKQ9ncpUG5bfqFLfCcV3eKW_UJvzdro0jbUOC9i_f6wsmIOKm-h--auTgCFov9CQ3mYU6z2T0gxck40SpkEKC5k71LDo8O6UOMYSvz2QnyCtp3nX" 
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full relative group">
              <img 
                alt="Kitchen Area" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeHFDUHl_s_OT1PU1YOpS_0y5dCuchn9rq_gL9mVcUK7IMeyWq1QVZ1kw7sX_cMJcpiHCbR9-wHgFzWBLo220Spd6uIlzuRfaMcgM4ZKI0avgwbIJBkwCdPFGwNXIBHYA74sBUco_Ar6V4Dn5LhzHka5_xMb-PHEBtcJdVtUjJCqBsG_pQx-aghgFjNNBHRVakwDs9FItGDU5BV2AF9d3yiMsZ3OAf4T6Vf8K-fEEe8lFCNZQnMhDlQpTridyulfvZDgzVh4t741b_" 
              />
              <div className="absolute inset-0 bg-brand-blue/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-bold tracking-wider border border-white/50 px-4 py-2 rounded">+12 Photos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Details */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="flex flex-wrap items-center justify-between mb-8 gap-6 p-6 bg-white dark:bg-brand-blue/10 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex space-x-8 text-brand-blue dark:text-gray-200">
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">king_bed</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Bedrooms</p>
                    <p className="font-bold font-serif text-lg">6 Suites</p>
                  </div>
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">bathtub</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Bathrooms</p>
                    <p className="font-bold font-serif text-lg">8.5</p>
                  </div>
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">straighten</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Area</p>
                    <p className="font-bold font-serif text-lg">12,400 sqft</p>
                  </div>
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">local_parking</span>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Parking</p>
                    <p className="font-bold font-serif text-lg">4 Spots</p>
                  </div>
                </div>
                <div className="bg-brand-blue text-white px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1">Asking Price</p>
                  <p className="text-2xl font-serif">$24,500,000</p>
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4 tracking-tight text-brand-blue dark:text-white">Property Overview</h2>
              <p className="text-lg leading-relaxed opacity-80 text-justify text-brand-blue dark:text-gray-300">
                Perched atop the legendary Sunset Strip, The Gilded Penthouse represents the pinnacle of California modernism. This architectural masterpiece features soaring 20-foot ceilings, automated floor-to-ceiling glass walls, and a private wraparound terrace offering 360-degree views of the Los Angeles basin. Finished with Italian Calacatta marble, brushed gold hardware, and wide-plank French oak, every detail has been curated for the most discerning global citizen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 tracking-tight text-brand-blue dark:text-white">Luxury Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: 'pool', text: 'Infinity Edge Pool' },
                  { icon: 'wine_bar', text: '1,200 Bottle Cellar' },
                  { icon: 'theaters', text: 'Dolby Atmos Cinema' },
                  { icon: 'fitness_center', text: 'Private Wellness Center' },
                  { icon: 'concierge', text: '24/7 Concierge' },
                  { icon: 'security', text: 'Biometric Security' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm border border-primary/10 hover:border-primary/50 transition-colors group cursor-default">
                    <span className="material-icons text-brand-blue group-hover:text-primary transition-colors">{item.icon}</span>
                    <span className="text-sm font-medium text-brand-blue dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Similar Listings Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 tracking-tight text-brand-blue dark:text-white">Featured Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-lg border border-primary/10 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      alt="Desert Oasis" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQoNeYt_R4neaeOZoJoTjS0wEyL1y_4bxG9_SEHKTV35Aoybf7XqcO94Tm1Mywq-5oh2W9QTGDYOndvoKM_3WaHSVBRYgj3w55mDxrkyT8FFEcxrRCFN0Py11bWKlBQkJIF2VNdAuarPXKgsH5dX5aGMy4qu7D0xiV5gKvlWlAGCRDCBJJ9A8OvJCJWqLv-e32GRnNVzopvRiUp5b1ibcdh9dkD3y5ZWGIDl4I7ADHwNUbXmzxl0kbPPiE__ZB-xbumvPxnztHHnRF" 
                    />
                    <div className="absolute top-4 right-4 bg-brand-blue text-white font-bold px-4 py-1 rounded shadow-lg text-sm border-b-2 border-primary">
                      $18.2M
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1 text-brand-blue dark:text-white">The Desert Oasis</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Palm Springs, CA</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4 text-xs opacity-70 text-brand-blue dark:text-gray-300">
                        <span>5 Bed</span>
                        <span>6 Bath</span>
                        <span>8,500 sqft</span>
                      </div>
                      <button className="text-brand-blue dark:text-primary font-bold text-sm flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                        View Detail <span className="material-icons text-sm ml-1">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-lg border border-primary/10 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      alt="Malibu Shore" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuChX2lDCyuqBVGQvnutWyYapvH7Wd_xB3h73Z7PEh0GC-3sdbb7IJkcIKPmr0qkVVFuGeNzR316l7Zl1yRhBgQJ0xbaFAG3DFPdFST95B-Na4hk2XcBil0VfJaZq1hckieZfTsIwo1CJVV-P6hWTorDqgXARZRltNOb9OiHLgZw2y1WY9LpaNXM7FjJfwOruUMLWNCOQW0fdbRR05MgiY6pnVk0J2DV1XxtKy3TY54Q2mPQdDzxT8eE9-P2235KL0R-CwrDDdlGp2UB" 
                    />
                    <div className="absolute top-4 right-4 bg-brand-blue text-white font-bold px-4 py-1 rounded shadow-lg text-sm border-b-2 border-primary">
                      $32.0M
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1 text-brand-blue dark:text-white">Malibu Shore Villa</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Malibu, CA</p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4 text-xs opacity-70 text-brand-blue dark:text-gray-300">
                        <span>7 Bed</span>
                        <span>9 Bath</span>
                        <span>15,000 sqft</span>
                      </div>
                      <button className="text-brand-blue dark:text-primary font-bold text-sm flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                        View Detail <span className="material-icons text-sm ml-1">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side: Sticky Booking */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 bg-white dark:bg-background-dark border border-primary/20 rounded-sm shadow-2xl overflow-hidden p-6">
              <div className="flex border-b border-primary/10 mb-6">
                <button className="flex-1 py-3 text-sm font-bold border-b-2 border-primary text-brand-blue dark:text-primary tracking-widest uppercase">Viewing</button>
                <button className="flex-1 py-3 text-sm font-bold border-b-2 border-transparent text-gray-400 hover:text-brand-blue tracking-widest uppercase transition-colors">Short Stay</button>
              </div>
              <div className="mb-6 text-center">
                <h3 className="text-xl font-serif font-bold tracking-tight mb-1 text-brand-blue dark:text-white">Book Your Appointment</h3>
                <p className="text-xs opacity-60 uppercase tracking-widest font-medium">Select an available date below</p>
              </div>
              
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-sm tracking-widest uppercase text-brand-blue dark:text-white">September 2024</span>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-primary/10 rounded-full transition-colors text-brand-blue dark:text-white">
                    <span className="material-icons text-lg">chevron_left</span>
                  </button>
                  <button className="p-1 hover:bg-primary/10 rounded-full transition-colors text-brand-blue dark:text-white">
                    <span className="material-icons text-lg">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {/* Days of Week */}
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-center opacity-40 uppercase">{day}</div>
                ))}
                
                {/* Row 1 */}
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">1</div>
                <div className="h-10 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded-sm text-gray-400 line-through decoration-primary/50 cursor-not-allowed">2</div>
                <div className="h-10 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded-sm text-gray-400 line-through decoration-primary/50 cursor-not-allowed">3</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">4</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">5</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">6</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">7</div>
                
                {/* Row 2 */}
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">8</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">9</div>
                <div className="h-10 bg-brand-blue flex items-center justify-center rounded-sm text-white font-bold cursor-pointer shadow-lg border-b-2 border-primary">10</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">11</div>
                <div className="h-10 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded-sm text-gray-400 line-through decoration-primary/50 cursor-not-allowed">12</div>
                <div className="h-10 bg-gray-50 dark:bg-white/5 flex items-center justify-center rounded-sm text-gray-400 line-through decoration-primary/50 cursor-not-allowed">13</div>
                <div className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">14</div>
                
                {/* Row 3 - Placeholder loop */}
                {[15, 16, 17, 18, 19, 20, 21].map(d => (
                   <div key={d} className="h-10 border border-primary/30 flex items-center justify-center rounded-sm text-brand-blue dark:text-primary font-bold cursor-pointer hover:bg-primary/5 transition-colors">{d}</div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 mb-8 text-[10px] uppercase font-bold tracking-widest opacity-60">
                <div className="flex items-center">
                  <span className="w-3 h-3 border border-primary rounded-sm mr-2"></span>
                  Available
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-gray-200 dark:bg-white/10 rounded-sm mr-2 line-through"></span>
                  Booked
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-brand-blue rounded-sm mr-2"></span>
                  Selected
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background-light dark:bg-white/5 rounded-lg border border-primary/5">
                  <p className="text-xs uppercase opacity-60 mb-1">Estimated Stay Value</p>
                  <div className="flex justify-between items-end">
                    <p className="text-2xl font-bold tracking-tight text-brand-blue dark:text-white">$4,250<span className="text-sm font-normal opacity-60">/night</span></p>
                    <p className="text-xs font-bold text-primary">Luxury Concierge Included</p>
                  </div>
                </div>
                <button className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-xl shadow-brand-blue/20 transform hover:-translate-y-0.5">
                  Book Viewing
                </button>
                <p className="text-center text-[10px] opacity-50 uppercase tracking-tighter text-brand-blue dark:text-gray-400">
                  Subject to financial verification for purchase viewings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map/Footer Section */}
      <footer className="mt-20 border-t border-primary/10 pt-12 pb-8 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6 tracking-tight text-white">Location</h2>
            <div className="h-64 rounded-xl overflow-hidden grayscale contrast-125 border border-primary/20 relative group">
              <img 
                alt="Location Map" 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXdBLh28R94XWXPU30bkaujSR2w3vmLZBJ_1OD7UgwvXon3C7xy5fmRSCLyJu6KhV6-33M-WzWausB63blLloj0kkSfXy2pyr2Btmum6QLYUvQLBOnftFY9y4EsK49qSlKnIBXkRUESw00Jo6oF35Tb3vEo9Bs6KK_JdPZAGFZcxpZHsoLshvLyn_d0gLFmhnF4urh5WASFlvRSed0hC-Qr1P0Oz3H1rZwt0ddp_60vBFpdNgpYc9PLURyXCTI2CgBF41SnqDbsNR-" 
              />
              <div className="absolute inset-0 bg-brand-blue/30 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="material-icons text-primary text-4xl drop-shadow-lg">location_on</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Elite Brokerage</h3>
              <p className="text-3xl font-serif font-bold tracking-tight leading-tight text-white">Represented by<br />Julien & Sarah Vance</p>
            </div>
            <div className="flex space-x-6">
              <button className="flex items-center space-x-2 border-b border-primary pb-2 font-bold tracking-wider hover:text-primary transition-colors">
                <span className="material-icons">phone</span>
                <span>Call +1 (555) 982-0012</span>
              </button>
              <button className="flex items-center space-x-2 border-b border-primary pb-2 font-bold tracking-wider hover:text-primary transition-colors">
                <span className="material-icons">email</span>
                <span>Inquiry@DeEyeson.com</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-12 border-t border-white/10 opacity-60 text-xs uppercase tracking-[0.2em] text-white">
          © 2024 De Eyeson Realty Luxury Division. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ListingPage;