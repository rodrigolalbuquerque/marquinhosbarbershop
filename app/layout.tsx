import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marquinhos Barber Shop — Barba, cabelo e cuidado completo',
  description: 'Marquinhos Barber Shop: uma rede de barbearias no Rio de Janeiro desde 1992.',
  generator: 'v0.app',
  icons: { icon: '/logo-face.svg' },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#1e5938' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="bg-[#f5f2ec]"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
