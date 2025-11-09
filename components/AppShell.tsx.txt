'use client'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AppShell() {
  const [messages] = useState([{ id: '1', role: 'assistant', content: '👋 Hello! Ask me anything.' }])

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[260px_1fr] bg-neutral-950 text-white">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          {messages.map((m) => (
            <div key={m.id} className="mb-4">
              <b className="text-blue-400">{m.role}:</b> {m.content}
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
