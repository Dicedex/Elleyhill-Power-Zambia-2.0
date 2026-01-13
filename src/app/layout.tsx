
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Providers } from '@/components/providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

// Metadata for the page
export const metadata: Metadata = {
  metadataBase: new URL('https://www.elleyhillzm.com'),
  title: {
    default: 'Elleyhill Power Zambia | Solar Panels, Inverters & Batteries',
    template: '%s | Elleyhill Power Zambia',
  },
  description: 'Elleyhill Power Zambia is your trusted source for high-quality solar products offering solar panels, Greenrich inverters, and lithium batteries. Trusted solar installers and suppliers across Zambia. We offer expert solar installation, cleaning, and maintenance services across Zambia.',
  keywords: [
    'Elleyhill',
    'Elleyhill Power',
    'Elley Hill Zambia',
    'solar company Zambia',
    'Greenrich inverters',
    'solar panels Zambia',
    'lithium batteries Zambia',
    'solar installation Zambia',
    'panel cleaning',
    'solar panels cleaning',
    'maintenance cleaning',
    'Zambia solar energy',
  ],
  authors: [{ name: 'Elleyhill Power' }],
  openGraph: {
    title: 'Elleyhill Power Zambia | Trusted Solar Energy Company',
    description: 'Buy solar panels, inverters, and lithium batteries from Elleyhill Power. Professional installation, maintenance & solar cleaning services across Zambia.',
    url: 'https://www.elleyhillzm.com',
    siteName: 'Elleyhill Power Zambia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elleyhill Power Zambia Solar Products',
      },
    ],
    locale: 'en_ZM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elleyhill Power Zambia | Solar Experts',
    description: 'Your trusted source for solar panels, inverters, and batteries in Zambia.',
    images: ['/og-image.jpg'],
    creator: '@ElleyhillPower',
  },
  alternates: {
    canonical: 'https://www.elleyhillzm.com',
  },
  icons: {
    icon: '/favicon.png',
  },
  other: {
    'theme-color': '#facc15',
    'apple-mobile-web-app-title': 'Elleyhill Power',
  },
};

// Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <Providers>
          {children}
          <Toaster />
          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Elleyhill Power Zambia",
                url: "https://www.elleyhillzm.com",
                logo: "https://www.elleyhillzm.com/favicon.png",
                sameAs: [
                  "https://www.facebook.com/elleyhillpowerzambia",
                  "https://www.instagram.com/elleyhillpowerzambia",
                  "https://www.linkedin.com/company/elleyhillpower",
                ],
                description:
                  "Elleyhill Power Zambia provides solar energy solutions, including solar panels, inverters, and batteries with expert installation services.",
              }),
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
