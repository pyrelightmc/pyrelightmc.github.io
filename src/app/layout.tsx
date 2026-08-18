import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from '@/components/search';
import { Geist, JetBrains_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

// Same font pairing as fumadocs.vercel.app itself: Geist for text, JetBrains
// Mono for code. `--font-display` is the variable name the landing page's
// headings already reference; only the font backing it changed.
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geist.variable} ${jetBrainsMono.variable} ${geist.className}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-fd-background">
        <RootProvider
          search={{
            SearchDialog,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
