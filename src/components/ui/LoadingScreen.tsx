import React from 'react';

export const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-10 text-center">
    <img src="/assets/mayap-logo.png" className="w-32 mb-8 animate-spin-slow" />
    <h1 className="text-3xl font-black text-[#1a3a3a] mb-2">Mayap A Biyahe</h1>
    <p className="text-gray-400 font-bold text-sm mb-10">Finding Vulcanizing & Motorshops near you...</p>
    
    <div className="w-full max-w-xs h-2.5 bg-gray-100 rounded-full overflow-hidden mb-3">
      <div className="w-[80%] h-full bg-[#27ae60] rounded-full transition-all duration-1000"></div>
    </div>
    <p className="text-[#27ae60] text-xs font-black tracking-widest">80% COMPLETE</p>
  </div>
);