import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Is it Christmas?",
  description:
    "The answer to the question we all have in our hearts: is it Christmas?",
  keywords: ["Christmas", "Natale", "Holidays"],
  applicationName: "Is it Christmas?",
  authors: [
    {
      name: "Sergio Vittorio Zambelli",
      url: "https://github.com/sergiovzambelli",
    },
  ],
  robots: "index, follow",
  metadataBase: new URL("https://isitchristmas.it"),
  openGraph: {
    title: "Is it Christmas?",
    description:
      "The answer to the question we all have in our hearts: is it Christmas?",
    url: "https://isitchristmas.it",
    siteName: "Is is Christmas?",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Is it Christmas?",
  description:
    "The answer to the question we all have in our hearts: is it Christmas?",
  url: "https://isitchristmas.it",
  potentialAction: {
    "@type": "ShowAction",
    name: "Is it Christmas?",
    result: {
      "@type": "WebPageElement",
      name: "Christmas status",
      description: "Displays whether today is Christmas or not.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
