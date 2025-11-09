'use client'
import { Plus, MessageSquareText } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col bg-neutral-900 border-r border-white/10 p-4">
      <div className="flex items-center gap-2 mb-4">
        <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded" />
        <span className="text-lg font-semibold">Pro AI</span>
      </div>

      <button className="flex items-center gap-2 p-2 rounded bg-white/10 hover:bg-white/20 transition mb-4">
        <Plus size={16} /> New Chat
      </button>

      <div className="space-y-2">
        <button className="flex items-center gap-2 p-2 rounded hover:bg-white/10 w-full text-left">
          <MessageSquareText size={16} /> Design ideas
        </button>
        <button className="flex items-center gap-2 p-2 rounded hover:bg-white/10 w-full text-left">
          <MessageSquareText size={16} /> Code review
        </button>
      </div>
    </aside>
  )
}
