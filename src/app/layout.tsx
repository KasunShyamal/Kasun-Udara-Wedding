import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "Kasun & Udara | Wedding & Homecoming Celebration",
  description: "Official digital wedding invitation for the wedding celebration of Kasun & Udara.",
  openGraph: {
    title: "Kasun & Udara Wedding Celebration",
    description: "Join us in celebrating the wedding & homecoming of Kasun & Udara.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="bg-[#FAF7F2] text-[#2C241E] antialiased selection:bg-[#EAE0D0] selection:text-[#4A3728] overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  );
}
