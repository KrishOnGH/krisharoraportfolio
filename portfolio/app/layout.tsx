import { Audiowide } from 'next/font/google'

export const metadata = {
  title: 'Krish Arora',
  description: 'Portfolio of Krish Arora.',
}

const audiowide = Audiowide({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-audiowide',
  weight: ['400']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${audiowide.variable}`} lang="en">
      <body>{children}</body>
    </html>
  )
}
