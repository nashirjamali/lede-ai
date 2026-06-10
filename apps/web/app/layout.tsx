import type { Metadata } from 'next';
import { Newsreader, Albert_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Lede — AI Content Ops',
  description: 'Team workspace for content marketing teams',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${newsreader.variable} ${albertSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
