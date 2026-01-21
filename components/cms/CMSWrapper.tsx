'use client';

import React from 'react';
import { CMSProvider } from './CMSProvider';
import { CMSToolbar } from './CMSToolbar';

export function CMSWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CMSProvider>
      {children}
      <CMSToolbar />
    </CMSProvider>
  );
}
