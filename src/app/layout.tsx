import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monkey Coffee — Coffee, Bar & Dining Escape",
  description: "Experience premium specialty single-origin coffees, handcrafted pastries, and casual dining at Monkey Coffee Jakarta. Built for PT Daya Rekadigital Indonesia challenge.",
  keywords: "coffee, cafe, dining, senopati, specialty coffee, jakarta, monkey coffee, v60, espresso",
  openGraph: {
    title: "Monkey Coffee — Coffee, Bar & Dining Escape",
    description: "Curated coffee, bar, and dining experience in Jakarta. Sourced globally, brewed locally.",
    type: "website",
    locale: "id_ID",
    url: "https://monkeycoffee.id",
    siteName: "Monkey Coffee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7]">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <div className="flex-1 flex flex-col">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
