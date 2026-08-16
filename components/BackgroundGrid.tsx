'use client';

import React from 'react';

interface BackgroundGridProps {
  side?: 'left' | 'right' | 'both';
  variant?: 'grid' | 'dots';
  className?: string;
}

export const BackgroundGrid = ({ side = 'left', variant = 'grid', className = '' }: BackgroundGridProps) => {
  const maskClass =
    side === 'left'
      ? '[mask-image:linear-gradient(to_right,black_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.2)_45%,transparent_60%)]'
      : side === 'right'
      ? '[mask-image:linear-gradient(to_left,black_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.2)_45%,transparent_60%)]'
      : '[mask-image:linear-gradient(to_right,black_0%,rgba(0,0,0,0.6)_20%,transparent_38%,transparent_62%,rgba(0,0,0,0.6)_80%,black_100%)]';

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)] ${className}`}
    >
      <div className={`absolute inset-0 w-full h-full ${maskClass}`}>
        {variant === 'grid' ? (
          <div className="absolute inset-0 w-full h-full opacity-85 bg-[linear-gradient(to_right,rgba(6,182,212,0.38)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.38)_1px,transparent_1px)] bg-[size:5rem_5rem] md:bg-[size:6.5rem_6.5rem]" />
        ) : (
          <div className="absolute inset-0 w-full h-full opacity-80 bg-[radial-gradient(rgba(6,182,212,0.45)_1.5px,transparent_1.5px)] bg-[size:2.5rem_2.5rem] md:bg-[size:3.5rem_3.5rem]" />
        )}
      </div>
    </div>
  );
};
