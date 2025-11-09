'use client'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppShell() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function sendMessage() {
    if (!input.trim()) return
    setLoading(true)

    // Add user's message to chat
    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])

    // Send message to your API route
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()

    // Add AI reply
    const aiMessage = { role: 'assistant', content: data.reply }
    setMessages((prev) => [...prev, aiMessage])
    setInput('')
    setLoading(false)
  }

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-neutral-950 text-white">
      <Sidebar />
      <div className="flex flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <p className="text-gray-400">👋 Start chatting below!</p>
          )}
          {messages.map((m, i) => (
            <p key={i}>
              <b className={m.role === 'user' ? 'text-blue-400' : 'text-green-400'}>
                {m.role}:
              </b>{' '}
              {m.content}
            </p>
          ))}
        </main>

        <footer className="border-t border-white/10 p-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-neutral-800 text-white p-3 rounded outline-none"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded disabled:opacity-50"
          >
            Send
          </button>
        </footer>
      </div>
    </div>
  )
}
