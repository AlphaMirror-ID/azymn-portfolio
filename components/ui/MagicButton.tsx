import React from 'react';

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button 
      className={`group flex items-center gap-3 px-6 py-3 text-sm font-mono tracking-widest uppercase text-white-200/80 hover:text-cyan-400 transition-all duration-300 hover:bg-white/5 rounded-full border border-white/10 hover:border-cyan-400/50 relative overflow-hidden focus:outline-none ${otherClasses}`} 
      onClick={handleClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {position === 'left' && <span className="group-hover:-translate-x-1 transition-transform duration-300">{icon}</span>}
        {title}
        {position === 'right' && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors duration-300"></div>
    </button>
  );
};
