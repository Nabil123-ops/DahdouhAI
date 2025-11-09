import './globals.css'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dahdouh-AI',
  description: 'Professional AI chat app created by Nabil Dahdouh',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
