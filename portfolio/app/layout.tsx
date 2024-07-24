export const metadata = {
  title: 'Krish Arora',
  description: 'Portfolio of Krish Arora.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
