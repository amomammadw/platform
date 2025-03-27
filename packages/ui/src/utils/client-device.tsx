'use client';

import { useEffect, useState } from 'react';

type TDevice = 'mobile' | 'tablet' | 'desktop';

export const useClientDevice = () => {
  const isClient = typeof window !== 'undefined';
  const [device, setDevice] = useState<TDevice>();

  useEffect(() => {
    if (isClient) {
      const mobileQuery = window.matchMedia('(max-width: 768px)');
      const tabletQuery = window.matchMedia('(max-width: 1024px)');

      const updateDevice = () => {
        if (mobileQuery.matches) {
          setDevice('mobile');
        } else if (tabletQuery.matches) {
          setDevice('tablet');
        } else {
          setDevice('desktop');
        }
      };

      updateDevice();
      mobileQuery.addEventListener('change', updateDevice);
      tabletQuery.addEventListener('change', updateDevice);

      return () => {
        mobileQuery.removeEventListener('change', updateDevice);
        tabletQuery.removeEventListener('change', updateDevice);
      };
    }
  }, [isClient]);

  return { device };
};
