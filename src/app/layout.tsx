import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-bebas" 
});

export const metadata: Metadata = {
  title: "FERVO — A festa que contagia",
  description: "A festa que contagia Salvador, Bahia. Reviva os melhores momentos, garanta seu ingresso e faça parte dessa história.",
  keywords: "fervo, festa, salvador, bahia, eventos, balada, música",
  authors: [{ name: "FERVO" }],
  openGraph: {
    title: "FERVO — A festa que contagia",
    description: "A festa que contagia Salvador, Bahia",
    url: "https://www.instagram.com/fervoficial/",
    siteName: "FERVO",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FERVO — A festa que contagia",
    description: "A festa que contagia Salvador, Bahia",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased bg-fervo-black text-white`}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
