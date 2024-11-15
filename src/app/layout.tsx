import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Is it Christmas?",
  description: "The answer to the question we all have in our hearts: is it Christmas?",
  keywords: ["Christmas", "Natale", "Holidays"],
  applicationName: "Is it Christmas?",
  authors: [{ name: "Sergio Vittorio Zambelli", url: "https://github.com/sergiovzambelli" }],
  robots: "index, follow",
  // metadataBase: new URL(seo_text.url),
  openGraph: {
    title: "Is it Christmas?",
    description: "The answer to the question we all have in our hearts: is it Christmas?",
    //url: seo_text.url,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
