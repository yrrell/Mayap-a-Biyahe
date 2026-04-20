import React from 'react';
import { Home, Map, User } from 'lucide-react';

export const Navbar = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center p-3 pb-6 z-40">
    <button className="flex flex-col items-center text-[#27ae60]">
      <Home size={22} />
      <span className="text-[10px] font-bold mt-1 uppercase">Home</span>
    </button>
    <button className="flex flex-col items-center text-gray-300">
      <Map size={22} />
      <span className="text-[10px] font-bold mt-1 uppercase">Map</span>
    </button>
    <button className="flex flex-col items-center text-gray-300">
      <User size={22} />
      <span className="text-[10px] font-bold mt-1 uppercase">Profile</span>
    </button>
  </nav>
);