import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { FloatingContact } from '@/components/floating-contact';
import { FirebaseAnalytics } from '@/components/firebase-analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumion - Leading Digital Solutions in Rwanda',
  description: 'Transform your digital presence with innovative solutions from Rwanda\'s premier tech company. Located at Norrsken House Kigali, we provide cutting-edge software development and digital marketing services.',
  keywords: ['Rwanda tech', 'Kigali software development', 'digital marketing Rwanda', 'web development Kigali', 'mobile apps Rwanda', 'SEO Rwanda', 'UI/UX design Kigali', 'Rwanda IT solutions', 'East Africa tech'],
  authors: [{ name: 'Lumion' }],
  openGraph: {
    title: 'Lumion - Rwanda\'s Leading Digital Solutions Provider',
    description: 'Transform your business with Rwanda\'s premier tech company. Based in Norrsken House Kigali, we deliver innovative digital solutions across East Africa.',
    url: 'https://lumion.rw',
    siteName: 'Lumion Rwanda',
    locale: 'en_RW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumion Rwanda - Digital Innovation Hub',
    description: 'Your trusted technology partner in Kigali, Rwanda. Contact us at lumion.corps@gmail.com',
    creator: '@__lumion',
    site: '@__lumion',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lumion.rw',
  },
  other: {
    'contact:email': 'lumion.corps@gmail.com',
    'contact:phone': '+250 780 217 221',
    'contact:address': '1 KN 78 St, Norrsken Kigali',
    'business:hours': 'Monday - Sunday: 9:00 AM - 6:00 PM',
    'region': 'Rwanda',
    'city': 'Kigali',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
              {children}
            <Footer />
          <FloatingContact />
          <FirebaseAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
} 