import React from 'react';

export const Header = () => (
  <header className="p-4 bg-white flex justify-between items-center border-b border-gray-100 sticky top-0 z-40">
    <div className="flex items-center gap-3">
      <img src="/assets/mayap-logo.png" alt="Mayap Logo" className="w-10 h-10 object-contain" />
      <div>
        <h1 className="text-lg font-black text-[#1a3a3a] leading-none">Mayap A Biyahe!</h1>
        <p className="text-[9px] font-bold text-[#27ae60] mt-1 flex items-center gap-1">
          📍 LUBAO, PAMPANGA
        </p>
      </div>
    </div>
    <div className="flex items-center gap-1.5 bg-[#e8f5e9] px-3 py-1 rounded-full border border-[#c8e6c9]">
      <span className="w-1.5 h-1.5 bg-[#27ae60] rounded-full animate-pulse"></span>
      <span className="text-[#27ae60] text-[10px] font-black uppercase">Online</span>
    </div>
  </header>
);