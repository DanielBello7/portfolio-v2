import type { Metadata } from 'next';
import './globals.css';
import { PortfolioContextProvider } from '@/context/portfolio.context';
import { Toaster } from '@/components';
import { AnimatePresence } from 'motion/react';

export const metadata: Metadata = {
  title: 'Daniel Bello',
  description: "Daniel Bello's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <PortfolioContextProvider>
          <AnimatePresence initial={true} mode="sync">
            {children}
          </AnimatePresence>
          <Toaster />
        </PortfolioContextProvider>
      </body>
    </html>
  );
}
