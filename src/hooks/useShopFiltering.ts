import { useMemo } from 'react';
import { checkIsOpen, calculateDistance } from '../lib/distance';

export const useShopFiltering = (shops: any[], userLoc: any, search: string) => {
  return useMemo(() => {
    if (!shops || !userLoc) return [];

    return shops
      .filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || s.brgy.toLowerCase().includes(search.toLowerCase()))
      .map(s => ({
        ...s,
        isOpen: checkIsOpen(s),
        distance: calculateDistance(userLoc.lat, userLoc.userLng || userLoc.lng, s.lat, s.lng)
      }))
      .sort((a, b) => {
        // First priority: Open vs Closed
        if (a.isOpen !== b.isOpen) return a.isOpen ? -1 : 1;
        // Second priority: Distance
        return a.distance - b.distance;
      });
  }, [shops, userLoc, search]);
};