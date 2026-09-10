import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  // As páginas internas trocam só o começo do título; a marca vem do template.
  title: {
    default: "Marquinhos Barber Shop — Barba, cabelo e cuidado completo",
    template: "%s · Marquinhos Barber Shop",
  },
  description:
    "Marquinhos Barber Shop: uma rede de barbearias no Rio de Janeiro desde 1992.",
  generator: "v0.app",
  icons: { icon: "/logo-face.svg" },
};

export const viewport: Viewport = { colorScheme: "light", themeColor: "#1e5938" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="bg-[#f5f2ec]">
      <body className="antialiased">
        {/* Header e Footer vivem no layout: valem para todas as rotas. */}
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
