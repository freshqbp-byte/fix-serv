import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { CallWidgetsWrapper } from '@/src/components/CallWidgetsWrapper';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const viewport: Viewport = {
  themeColor: '#0c54a0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.roservicesupport.co.in'),
  title: {
    default: `${BUSINESS_DETAILS.name} | Doorstep RO Water Purifier Repair & Service Bangalore`,
    template: `%s | ${BUSINESS_DETAILS.name}`,
  },
  description:
    'Fastest 60–90 min doorstep RO water purifier repair, filter replacement, AMC & installation service in Bangalore. Kent, Aquaguard, Pureit, AO Smith & Livpure expert service.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813995/IMG-20260918-WA0070_skegej.jpg',
    apple: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813995/IMG-20260918-WA0070_skegej.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ Sirf 3 preconnect (important origins) */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://formsubmit.co" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* ✅ DNS prefetch (halka) — fonts aur cloudinary ke liye */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
        {/* ✅ GA4 - Load after user interaction (fast page load) */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18344051619', {
              'send_page_view': false
            });
            
            var gaLoaded = false;
            function loadGA() {
              if (gaLoaded) return;
              gaLoaded = true;
              var script = document.createElement('script');
              script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-18344051619';
              script.async = true;
              document.head.appendChild(script);
              gtag('event', 'page_view');
            }
            
            ['scroll', 'click', 'touchstart', 'keydown'].forEach(function(e) {
              window.addEventListener(e, loadGA, { once: true, passive: true });
            });
            setTimeout(loadGA, 3000);
          `}
        </Script>
        <main className="flex-1">{children}</main>
        <CallWidgetsWrapper />
      </body>
    </html>
  );
}