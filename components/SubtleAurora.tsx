'use client';

import React from 'react';

export const SubtleAurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)]">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-30 mix-blend-screen animate-[aurora_20s_ease-in-out_infinite_alternate]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/40 via-black-100 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-blue-800/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] bg-cyan-800/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};
