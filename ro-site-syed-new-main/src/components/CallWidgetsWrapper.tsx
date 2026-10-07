'use client';

import dynamic from 'next/dynamic';

const CallWidgets = dynamic(
  () => import('./CallWidgets').then((m) => m.CallWidgets),
  { ssr: false }
);

export function CallWidgetsWrapper() {
  return <CallWidgets />;
}