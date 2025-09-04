import type { Metadata } from 'next'
import { NextTamaguiProvider } from '../provider'

const title = 'Template'
const description = 'Template'
const image = '/assets/og-image.jpg'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [image],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <NextTamaguiProvider>{children}</NextTamaguiProvider>
      </body>
    </html>
  )
}
