import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sales Page | Tingkatkan Penjualan dengan Landing Page Profesional",
  description: "Landing page sales yang dirancang untuk meningkatkan konversi dan penjualan dengan desain modern, cepat, dan responsif.",
  keywords: "Sales Page, Landing Page, Konversi, Penjualan, Marketing, Digital Marketing",
  author: "Nama Anda",
  robots: "index, follow",
  openGraph: {
    title: "Sales Page | Landing Page untuk Meningkatkan Konversi",
    description: "Tingkatkan penjualan Anda dengan landing page profesional dan optimasi konversi terbaik.",
    url: "https://yourwebsite.com",
    siteName: "Sales Page",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sales Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Sales Page | Landing Page Profesional",
    description: "Landing page terbaik untuk meningkatkan konversi dan penjualan bisnis Anda.",
    images: ["https://yourwebsite.com/images/preview.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Struktur Data JSON-LD untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Sales Page | Landing Page Profesional",
              "description": "Landing page yang dirancang untuk meningkatkan konversi dan penjualan dengan desain modern, cepat, dan responsif.",
              "url": "https://yourwebsite.com",
              "image": "https://yourwebsite.com/images/preview.jpg",
              "author": {
                "@type": "Person",
                "name": "Nama Anda",
              },
              "publisher": {
                "@type": "Organization",
                "name": "Nama Bisnis Anda",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/images/logo.png",
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
