import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body style={{ 
        margin: 0, 
        padding: 0, 
        backgroundColor: '#000000', 
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}
