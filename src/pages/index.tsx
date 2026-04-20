import React, { useMemo } from 'react';
import { Header } from '../components/layout/header';
import { Navbar } from '../components/layout/Navbar';
import { ShopCard } from '../components/ui/ShopCard';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { useLocation } from '../context/LocationContext';
import { lubaoShops } from '../data/shops-data';
import { calculateDistance, formatDistance, checkIsOpen } from '../lib/distance';

export default function Home() {
  const { location } = useLocation();

  const sortedShops = useMemo(() => {
    if (!location) return [];
    return lubaoShops.map(s => {
      const d = calculateDistance(location.lat, location.lng, s.lat, s.lng);
      return { ...s, dVal: d, dTxt: formatDistance(d), isOpen: checkIsOpen(s) };
    }).sort((a, b) => a.isOpen === b.isOpen ? a.dVal - b.dVal : a.isOpen ? -1 : 1);
  }, [location]);

  if (!location) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-white pb-28">
      <Header />
      <main className="p-6">
        <div className="relative mb-8">
           <input type="text" placeholder="Search shops or locations..." className="w-full p-4 pl-6 rounded-2xl bg-gray-50 border-none text-sm font-bold text-gray-500 placeholder-gray-300" />
           <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#27ae60] font-black text-[10px] tracking-widest">SEARCH</button>
        </div>
        
        <div className="bg-[#27ae60] rounded-[2rem] p-6 text-white mb-8 flex items-center justify-center gap-2 font-black shadow-lg shadow-green-100">
           <span className="text-xl italic uppercase tracking-tighter">Auto-Encode & Pin Current Shop</span>
        </div>

        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mb-6 pl-2">Nearby Shops</p>
        {sortedShops.map(shop => <ShopCard key={shop.id} shop={shop} distance={shop.dTxt} />)}
      </main>
      <Navbar />
    </div>
  );
}