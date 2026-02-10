import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <path d="M20 80V35L35 30V80H20Z" fill="currentColor" className={light ? "text-white" : "text-brand-blue dark:text-white"} />
          <path d="M38 80V20L58 15V80H38Z" fill="currentColor" className={light ? "text-white" : "text-brand-blue dark:text-white"} />
          <path d="M62 80V25L80 30V80H62Z" fill="currentColor" className={light ? "text-white" : "text-brand-blue dark:text-white"} />
          <path d="M5 82C30 95 70 95 95 75" stroke="#cfa144" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M15 85C35 92 65 92 85 78" stroke="#f1d692" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline leading-none">
          <span className={`text-lg md:text-xl font-bold tracking-tight uppercase font-display ${light ? "text-white" : "text-brand-blue dark:text-white"}`}>De Eyeson</span>
          <span className={`text-lg md:text-xl font-light tracking-widest uppercase ml-1.5 font-display ${light ? "text-white" : "text-brand-blue dark:text-white"}`}>Realty</span>
        </div>
        <span className="text-[0.55rem] md:text-[0.6rem] tracking-widest text-primary font-serif italic mt-0.5">eyes on the market, focus on you</span>
      </div>
    </div>
  );
};
