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
      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:py-12">
        {/* Hero Gallery Section */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12 animate-fade-in-up">
          <div className="lg:col-span-3 h-[500px] relative rounded-xl overflow-hidden group border border-primary/10">
            <img 
              alt="Ultra Luxury Living Space" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1600" 
            />
            <div className="absolute bottom-6 left-6 bg-brand-blue/90 dark:bg-background-dark/90 p-5 rounded-sm shadow-xl border-l-4 border-primary backdrop-blur-sm">
              <h1 className="text-3xl font-serif text-white">The Gilded Penthouse</h1>
              <p className="text-[10px] uppercase tracking-widest flex items-center mt-1 text-primary font-bold">
                <span className="material-icons text-primary text-base mr-1">place</span>
                Bel Air, Los Angeles, CA
              </p>
            </div>
          </div>
          <div className="hidden lg:grid grid-rows-2 gap-4">
            <div className="rounded-xl overflow-hidden h-full border border-primary/10">
              <img 
                alt="Luxury Master Bedroom Suite" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800" 
              />
            </div>
            <div className="rounded-xl overflow-hidden h-full relative group border border-primary/10">
              <img 
                alt="State of the Art Kitchen" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute inset-0 bg-brand-blue/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest border border-white/50 px-4 py-2 rounded">+12 Photos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <section className="animate-fade-in-up-delay-1">
              <div className="flex flex-wrap items-center justify-between mb-8 gap-6 p-6 bg-white dark:bg-brand-blue/10 rounded-xl border border-primary/10 shadow-sm">
                <div className="flex space-x-8 text-brand-blue dark:text-gray-200">
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">king_bed</span>
                    <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold">Suites</p>
                    <p className="font-bold font-serif text-lg">06</p>
                  </div>
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">bathtub</span>
                    <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold">Baths</p>
                    <p className="font-bold font-serif text-lg">8.5</p>
                  </div>
                  <div className="text-center">
                    <span className="material-icons text-primary text-3xl mb-1">straighten</span>
                    <p className="text-[9px] uppercase tracking-[0.2em] opacity-60 font-bold">Square Ft</p>
                    <p className="font-bold font-serif text-lg">12,400</p>
                  </div>
                </div>
                <div className="bg-brand-blue text-white px-8 py-5 rounded-sm shadow-xl border-r-4 border-primary">
                  <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-primary mb-1">Offering Price</p>
                  <p className="text-2xl font-serif">$24,500,000</p>
                </div>
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4 tracking-tight text-brand-blue dark:text-white">Property Narrative</h2>
              <p className="text-lg leading-relaxed opacity-80 text-justify text-brand-blue dark:text-gray-300 font-light">
                Perched atop the legendary Sunset Strip, The Gilded Penthouse represents the pinnacle of California modernism. This architectural masterpiece features soaring 20-foot ceilings, automated floor-to-ceiling glass walls, and a private wraparound terrace offering 360-degree views of the Los Angeles basin.
              </p>
            </section>

            <section className="animate-fade-in-up-delay-2">
              <h2 className="text-2xl font-serif font-bold mb-6 tracking-tight text-brand-blue dark:text-white">Luxury Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: 'pool', text: 'Infinity Edge Pool' },
                  { icon: 'wine_bar', text: '1,200 Bottle Cellar' },
                  { icon: 'theaters', text: 'Dolby Atmos Cinema' },
                  { icon: 'fitness_center', text: 'Wellness Center' },
                  { icon: 'concierge', text: '24/7 Concierge' },
                  { icon: 'security', text: 'Biometric Security' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-white dark:bg-background-dark/50 rounded-sm shadow-sm border border-primary/5 hover:border-primary/50 transition-all duration-300 group cursor-default">
                    <span className="material-icons text-brand-blue dark:text-primary/60 group-hover:text-primary transition-colors">{item.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue dark:text-gray-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 bg-white dark:bg-background-dark border border-primary/20 rounded-sm shadow-2xl overflow-hidden p-8 ring-1 ring-black/5">
              <div className="flex border-b border-primary/10 mb-8">
                <button className="flex-1 py-3 text-[10px] font-bold border-b-2 border-primary text-brand-blue dark:text-primary tracking-[0.2em] uppercase">Private Viewing</button>
                <button className="flex-1 py-3 text-[10px] font-bold border-b-2 border-transparent text-gray-400 hover:text-brand-blue tracking-[0.2em] uppercase transition-colors">Concierge Stay</button>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-[11px] tracking-[0.2em] uppercase text-brand-blue dark:text-white">Sept 2024</span>
                <div className="flex space-x-3">
                  <button className="p-1 hover:bg-primary/10 rounded-full transition-colors text-brand-blue dark:text-white">
                    <span className="material-icons text-lg">chevron_left</span>
                  </button>
                  <button className="p-1 hover:bg-primary/10 rounded-full transition-colors text-brand-blue dark:text-white">
                    <span className="material-icons text-lg">chevron_right</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1.5 mb-8">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-[9px] font-black text-center opacity-30 uppercase">{day}</div>
                ))}
                
                {calendarDays.map(day => {
                  const isBookedDay = bookedDays.includes(day);
                  const isSelected = selectedDate === day;
                  
                  return (
                    <button
                      key={day}
                      disabled={isBookedDay}
                      onClick={() => setSelectedDate(day)}
                      className={`h-9 flex items-center justify-center rounded-sm text-[11px] font-bold transition-all ${
                        isBookedDay 
                          ? 'bg-gray-50 dark:bg-white/5 text-gray-300 dark:text-gray-600 cursor-not-allowed' 
                          : isSelected
                            ? 'bg-brand-blue text-white shadow-lg scale-110 z-10'
                            : 'border border-primary/10 text-brand-blue dark:text-primary/80 hover:border-primary/50'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <button 
                onClick={handleBooking}
                disabled={isBooked}
                className={`w-full py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl shadow-brand-blue/10 transform hover:-translate-y-0.5 ${
                  isBooked 
                    ? 'bg-green-600 text-white' 
                    : 'bg-brand-blue text-white hover:bg-primary'
                }`}
              >
                {isBooked ? 'Request Logged' : 'Schedule Tour'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-primary/10 pt-16 pb-10 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-xl font-serif font-bold mb-8 tracking-tight text-white uppercase tracking-[0.1em]">The Locale</h2>
            <div className="h-72 rounded-sm overflow-hidden grayscale contrast-125 border border-primary/20 relative group">
              <img 
                alt="Panoramic City Skyline" 
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000" 
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800" 
              />
              <div className="absolute inset-0 bg-brand-blue/30 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="material-icons text-primary text-5xl drop-shadow-2xl">location_on</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-10">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Elite Brokerage Team</h3>
              <p className="text-4xl font-serif font-bold tracking-tight leading-tight text-white">Julien &<br />Sarah Vance</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <button className="flex items-center space-x-3 border-b border-primary/30 pb-2 font-bold tracking-[0.2em] hover:text-primary transition-colors text-[10px] uppercase">
                <span className="material-icons text-lg">phone</span>
                <span>+1 555 982 0012</span>
              </button>
              <button className="flex items-center space-x-3 border-b border-primary/30 pb-2 font-bold tracking-[0.2em] hover:text-primary transition-colors text-[10px] uppercase">
                <span className="material-icons text-lg">email</span>
                <span>Inquiry@DeEyeson.com</span>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-12 border-t border-white/5 opacity-40 text-[9px] uppercase tracking-[0.4em] text-white">
          © 2024 De Eyeson Realty Luxury Division. Secure & Confidential.
        </div>
      </footer>
    </div>
  );
};

export default ListingPage;