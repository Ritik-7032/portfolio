import React from 'react';

export const BackgroundGlows: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic ambient gradient orbs */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-slow"
      />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-violet-600/12 blur-[140px] animate-pulse-slow"
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="absolute top-2/3 -left-20 w-[500px] h-[500px] rounded-full bg-rose-500/8 blur-[120px] animate-pulse-slow"
        style={{ animationDelay: '4s' }}
      />
      <div 
        className="absolute -bottom-40 right-1/4 w-[650px] h-[650px] rounded-full bg-blue-600/10 blur-[150px] animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />

      {/* Grid Pattern & subtle noise */}
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />
    </div>
  );
};
