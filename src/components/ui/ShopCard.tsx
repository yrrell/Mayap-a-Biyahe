import React from 'react';
import { Rocket, Phone, MapPin, MessageSquare } from 'lucide-react';

export const ShopCard = ({ shop, distance }: { shop: any; distance: string }) => {
  // Navigation Link Innovation
  const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${shop.lat},${shop.lng}`;

  return (
    <div className="bg-white rounded-[2rem] p-6 mb-5 shadow-sm border border-gray-50 active:scale-[0.98] transition-transform">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-black text-[#1a3a3a] leading-tight mb-1">{shop.name}</h3>
          <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-bold">
            <MapPin size={13} className="text-red-400" />
            <span>{shop.brgy}</span>
            <span className="text-gray-200">•</span>
            <span className="text-[#27ae60] font-black">{distance}</span>
          </div>
        </div>
        <div className={`px-3 py-1.5 rounded-full text-[9px] font-black border ${
          shop.isOpen ? 'bg-green-50 text-[#27ae60] border-green-100' : 'bg-red-50 text-red-500 border-red-100'
        }`}>
          {shop.isOpen ? '● OPEN' : '○ CLOSED'}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <a href={`tel:${shop.contact}`} className="flex flex-col items-center justify-center py-4 bg-[#f8f9fa] rounded-2xl border border-gray-100 text-[#1a3a3a]">
          <Phone size={18} />
          <span className="text-[9px] font-black mt-1 uppercase">Call</span>
        </a>
        <a href={`sms:${shop.contact}`} className="flex flex-col items-center justify-center py-4 bg-[#f8f9fa] rounded-2xl border border-gray-100 text-gray-400">
          <MessageSquare size={18} />
          <span className="text-[9px] font-black mt-1 uppercase">Sms</span>
        </a>
        <a href={navUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center py-4 bg-[#27ae60] rounded-2xl text-white shadow-lg shadow-green-100">
          <Rocket size={18} />
          <span className="text-[9px] font-black mt-1 uppercase">Go Now</span>
        </a>
      </div>
    </div>
  );
};