import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${siteConfig.name} - Your Trusted IT Partner`,
    template: "%s | QuadTech Consulting",
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/logo.png?v=2", type: "image/png" },
    ],
    shortcut: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.png?v=2", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} - Your Trusted IT Partner`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Your Trusted IT Partner`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0d9488] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            strategy="lazyOnload"
          />
        ) : null}
        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: siteConfig.email,
                telephone: siteConfig.phone || undefined,
                contactType: "customer service",
              },
            ],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
