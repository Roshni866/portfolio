import { useState, useEffect } from 'react'

const ROLES = ['Web Developer', 'AI & ML Engineer', 'Data Science Enthusiast', 'Open Source Contributor']

const STATS = [
  { value: '9.43',  label: 'GPA / 10.0' },
  { value: '2+',    label: 'Live Projects' },
  { value: '5+',    label: 'OSS Contributions' },
  { value: '2',     label: 'Certifications' },
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = ROLES[idx]
    let t: ReturnType<typeof setTimeout>
    if (typing) {
      if (text.length < target.length) t = setTimeout(() => setText(target.slice(0, text.length + 1)), 65)
      else t = setTimeout(() => setTyping(false), 2000)
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 35)
      else { setIdx((idx + 1) % ROLES.length); setTyping(true) }
    }
    return () => clearTimeout(t)
  }, [text, typing, idx])

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="glow-blob w-[600px] h-[600px] bg-blue-DEFAULT/12 -top-20 -left-32" />
      <div className="glow-blob w-[400px] h-[400px] bg-blue-dim/15 top-1/2 -right-20" />
      <div className="glow-blob w-[300px] h-[300px] bg-blue-DEFAULT/8 bottom-10 left-1/3" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8
          bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to full-time &amp; internship opportunities
        </div>

        <div className="bg-surface/70 border border-border rounded-2xl p-6 text-left inline-block mb-8 w-full max-w-lg backdrop-blur-md"
          style={{ boxShadow: '0 0 60px rgba(59,130,246,0.1), 0 0 120px rgba(59,130,246,0.04)' }}>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-muted text-xs font-mono">~/portfolio — bash</span>
          </div>
          <div className="font-mono text-sm space-y-3">
            <p className="text-muted"><span className="text-blue-DEFAULT">$</span> whoami</p>
            <p className="text-[var(--text-primary)] text-xl sm:text-2xl font-bold">
              Hi, I'm <span className="text-blue-DEFAULT">Roshni Bagga</span> 👋
            </p>
            <p className="text-muted mt-1"><span className="text-blue-DEFAULT">$</span> cat role.txt</p>
            <div className="text-[var(--text-primary)] text-base sm:text-lg min-h-[28px] flex items-center gap-1">
              {text}
              <span className="inline-block w-0.5 h-5 bg-blue-DEFAULT align-middle cursor-blink" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={() => go('projects')}
            className="px-8 py-3 font-mono rounded-xl font-semibold text-white transition-all duration-200"
            style={{ background: '#2563eb', boxShadow: '0 0 25px rgba(37,99,235,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1d4ed8')}
            onMouseLeave={e => (e.currentTarget.style.background = '#2563eb')}>
            view projects →
          </button>
          <button onClick={() => go('contact')}
            className="px-8 py-3 font-mono rounded-xl transition-all duration-200 text-[var(--text-primary)]"
            style={{ border: '2px solid #2563eb' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2563eb'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '' }}>
            get in touch
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {STATS.map(s => (
            <div key={s.label} className="bg-surface/50 border border-border/60 rounded-xl px-4 py-3 backdrop-blur-sm">
              <p className="text-blue-DEFAULT font-bold text-xl font-mono">{s.value}</p>
              <p className="text-muted text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-muted animate-bounce">
          <span className="text-xs font-mono">scroll down</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}