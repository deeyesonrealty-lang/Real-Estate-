import React, { useState } from 'react';

const ListingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(10);
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (selectedDate) {
      setIsBooked(true);
      setTimeout(() => setIsBooked(false), 3000);
    }
  };

  const calendarDays = Array.from({ length: 21 }, (_, i) => i + 1);
  const bookedDays = [2, 3, 12, 13];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/20 px-6 py-2 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                  <path d="M20 80V35L35 30V80H20Z" fill="#0c2b4d" />
                  <path d="M38 80V20L58 15V80H38Z" fill="#0c2b4d" />
                  <path d="M62 80V25L80 30V80H62Z" fill="#0c2b4d" />
                  <rect x="42" y="25" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="30" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="35" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="40" width="12" height="1.5" fill="#587ea3" />
                  <rect x="42" y="45" width="12" height="1.5" fill="#587ea3" />
                  <path d="M5 82C30 95 70 95 95 75" stroke="#cfa144" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M15 85C35 92 65 92 85 78" stroke="#f1d692" strokeWidth="1" strokeLinecap="round" fill="none" />
               </svg>
            </div>
            <div className="flex flex-col justify-center">
               <div className="flex items-baseline leading-none">
                  <span className="text-xl font-bold tracking-tight text-brand-blue dark:text-white font-display uppercase">De Eyeson</span>
                  <span className="text-xl font-light tracking-widest text-brand-blue dark:text-white ml-1.5 font-display uppercase">Realty</span>
               </div>
               <span className="text-[0.6rem] tracking-widest text-primary font-serif italic mt-0.5">eyes on the market, focus on you</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-brand-blue dark:text-gray-300">
            <a href="#" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary/30">Listings</a>
            <a href="#" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary/30">Concierge</a>
            <a href="#" className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary/30">Our Story</a>
            <a href="#" className="hover:text-primary transition-colors border-b-2 border-primary py-2">Property Detail</a>
          </div>
          <button className="bg-brand-blue text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary transition-all shadow-lg shadow-brand-blue/20">
            Contact Agent
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:py-12">
        {/* Hero Gallery Section */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12 animate-fade-in-up">
          <div className="lg:col-span-3 h-[500px] relative rounded-xl overflow-hidden group">
            <img 
              alt="Main Living Space" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600" 
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
                src="https://images.unsplash.com/photo-1600607687940-4e2a09695d2b?auto=format&fit=crop&q=80&w=800" 
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full relative group">
              <img 
                alt="Kitchen Area" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=800" 
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
            <section className="animate-fade-in-up-delay-1">
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
                </div>
                <div className="bg-brand-blue text-white px-6 py-4 rounded-lg shadow-lg">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1">Asking Price</p>
                  <p className="text-2xl font-serif">$24,500,000</p>
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4 tracking-tight text-brand-blue dark:text-white">Property Overview</h2>
              <p className="text-lg leading-relaxed opacity-80 text-justify text-brand-blue dark:text-gray-300">
                Perched atop the legendary Sunset Strip, The Gilded Penthouse represents the pinnacle of California modernism. This architectural masterpiece features soaring 20-foot ceilings, automated floor-to-ceiling glass walls, and a private wraparound terrace offering 360-degree views of the Los Angeles basin.
              </p>
            </section>

            <section className="animate-fade-in-up-delay-2">
              <h2 className="text-2xl font-serif font-bold mb-6 tracking-tight text-brand-blue dark:text-white">Luxury Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: 'pool', text: 'Infinity Edge Pool' },
                  { icon: 'wine_bar', text: '1,200 Bottle Cellar' },
                  { icon: 'theaters', text: 'Dolby Atmos Cinema' },
                  { icon: 'fitness_center', text: 'Wellness Center' },
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

            <section className="animate-fade-in-up-delay-3">
              <h2 className="text-2xl font-serif font-bold mb-6 tracking-tight text-brand-blue dark:text-white">Featured Listings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-lg border border-primary/10 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      alt="Desert Oasis" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" 
                    />
                    <div className="absolute top-4 right-4 bg-brand-blue text-white font-bold px-4 py-1 rounded shadow-lg text-sm border-b-2 border-primary">
                      $18.2M
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1 text-brand-blue dark:text-white">The Desert Oasis</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Palm Springs, CA</p>
                    <button className="text-brand-blue dark:text-primary font-bold text-sm flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                      View Detail <span className="material-icons text-sm ml-1">arrow_forward</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-background-dark/50 rounded-xl overflow-hidden shadow-lg border border-primary/10 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      alt="Malibu Shore" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" 
                    />
                    <div className="absolute top-4 right-4 bg-brand-blue text-white font-bold px-4 py-1 rounded shadow-lg text-sm border-b-2 border-primary">
                      $32.0M
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-1 text-brand-blue dark:text-white">Malibu Shore Villa</h3>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Malibu, CA</p>
                    <button className="text-brand-blue dark:text-primary font-bold text-sm flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                      View Detail <span className="material-icons text-sm ml-1">arrow_forward</span>
                    </button>
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

              <div className="grid grid-cols-7 gap-2 mb-6">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-center opacity-40 uppercase">{day}</div>
                ))}
                
                {calendarDays.map(day => {
                  const isBookedDay = bookedDays.includes(day);
                  const isSelected = selectedDate === day;
                  
                  return (
                    <button
                      key={day}
                      disabled={isBookedDay}
                      onClick={() => setSelectedDate(day)}
                      className={`h-10 flex items-center justify-center rounded-sm text-sm font-bold transition-all ${
                        isBookedDay 
                          ? 'bg-gray-50 dark:bg-white/5 text-gray-400 line-through cursor-not-allowed opacity-50' 
                          : isSelected
                            ? 'bg-brand-blue text-white shadow-lg scale-105 z-10'
                            : 'border border-primary/20 text-brand-blue dark:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center space-x-6 mb-8 text-[10px] uppercase font-bold tracking-widest opacity-60">
                <div className="flex items-center"><span className="w-3 h-3 border border-primary rounded-sm mr-2"></span>Available</div>
                <div className="flex items-center"><span className="w-3 h-3 bg-brand-blue rounded-sm mr-2"></span>Selected</div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-background-light dark:bg-white/5 rounded-lg border border-primary/5">
                  <p className="text-xs uppercase opacity-60 mb-1">Appointment Type</p>
                  <div className="flex justify-between items-end">
                    <p className="text-lg font-bold tracking-tight text-brand-blue dark:text-white">Private Tour</p>
                    <p className="text-xs font-bold text-primary">Signature Service</p>
                  </div>
                </div>
                <button 
                  onClick={handleBooking}
                  disabled={isBooked}
                  className={`w-full py-4 rounded-lg font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-blue/20 transform hover:-translate-y-0.5 ${
                    isBooked 
                      ? 'bg-green-600 text-white cursor-default' 
                      : 'bg-brand-blue text-white hover:bg-primary'
                  }`}
                >
                  {isBooked ? 'Request Sent' : 'Book Viewing'}
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
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
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
              <button className="flex items-center space-x-2 border-b border-primary pb-2 font-bold tracking-wider hover:text-primary transition-colors text-sm">
                <span className="material-icons text-base">phone</span>
                <span>Call +1 (555) 982-0012</span>
              </button>
              <button className="flex items-center space-x-2 border-b border-primary pb-2 font-bold tracking-wider hover:text-primary transition-colors text-sm">
                <span className="material-icons text-base">email</span>
                <span>Inquiry@DeEyeson.com</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-12 border-t border-white/10 opacity-60 text-[10px] uppercase tracking-[0.2em] text-white">
          © 2024 De Eyeson Realty Luxury Division. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default ListingPage;