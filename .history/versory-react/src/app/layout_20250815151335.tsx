import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Versiory - Transformando ideias em sucesso",
  description: "Empresa especializada em soluções web, fortalecendo sua autoridade online e gerando valor real para suas marcas.",
  keywords: "desenvolvimento web, sites, landing pages, e-commerce, aplicativos, tecnologia, digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-versory-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
