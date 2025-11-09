'use client'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 bg-neutral-900 border-b border-white/10 p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Pro AI</h1>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 bg-white/10 rounded hover:bg-white/20 transition"
      >
        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  )
}
