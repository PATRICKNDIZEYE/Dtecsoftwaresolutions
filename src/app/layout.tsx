import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { SmoothScroll } from "./components/utils/SmoothScroll";
import { ScrollToTop } from "./components/utils/ScrollToTop";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DTEC Software Solutions | Innovative Tech Solutions',
  description: 'Transforming ideas into digital reality with cutting-edge software solutions, tech training, and digital marketing services.',
  keywords: ['software development', 'tech training', 'digital marketing', 'IT solutions', 'web development', 'mobile apps'],
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dtecsoftwaresolutions.com',
    title: 'DTEC Software Solutions',
    description: 'Transforming ideas into digital reality with cutting-edge software solutions.',
    siteName: 'DTEC Software Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DTEC Software Solutions',
    description: 'Innovative tech solutions for the modern enterprise.',
    creator: '@dtecsolutions',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-black text-white`}>
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <ScrollToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
