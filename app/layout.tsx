import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ガールズバンドクライプチオンリー',
  description: '2026/01/18(日)にインテックス大阪で開催される、「ガールズバンドクライ」のプチオンリーです。',
  keywords: ['ガールズバンドクライ', 'ガルクラ', 'プチオンリー', 'コミックトレジャー', '大阪'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
