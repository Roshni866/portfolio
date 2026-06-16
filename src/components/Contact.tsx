import { useRef, useState, useEffect } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

const submit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  await fetch('https://formspree.io/f/mvznyvgv', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  setSent(true)
  setTimeout(() => setSent(false), 3000)
  setForm({ name: '', email: '', message: '' })
}

  const inputCls = `w-full bg-dark border border-border rounded-xl px-4 py-3 text-white font-mono text-sm
    focus:outline-none focus:border-blue-DEFAULT transition-colors placeholder:text-muted/50`

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="glow-blob w-[400px] h-[300px] bg-blue-DEFAULT/6 bottom-0 left-1/2 -translate-x-1/2" />

      <div className={`max-w-5xl mx-auto relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="mb-14">
          <p className="font-mono text-xs text-blue-DEFAULT tracking-widest uppercase mb-3">// 06</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Get In Touch</h2>
          <p className="font-mono text-sm text-muted">Let's connect and build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div className="bg-surface/70 border border-border rounded-2xl overflow-hidden backdrop-blur-md">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-muted text-xs font-mono">contact.sh</span>
            </div>
            <form onSubmit={submit} className="p-6 space-y-5">
              <div>
                <label className="block text-xs font-mono text-muted mb-2"><span className="text-blue-DEFAULT">$</span> name</label>
                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputCls} placeholder="John Doe" required />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted mb-2"><span className="text-blue-DEFAULT">$</span> email</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputCls} placeholder="john@example.com" required />
              </div>
              <div>
                <label className="block text-xs font-mono text-muted mb-2"><span className="text-blue-DEFAULT">$</span> message</label>
                <textarea value={form.message} rows={5} onChange={e => setForm({...form, message: e.target.value})} className={inputCls + ' resize-none'} placeholder="Your message..." required />
              </div>
              <button type="submit"
                className={`w-full py-3 font-mono rounded-xl transition-all duration-300 font-semibold ${
                  sent ? 'bg-green-600 text-white' : 'bg-blue-DEFAULT text-white hover:bg-blue-bright'
                }`}
                style={!sent ? { boxShadow: '0 0 20px rgba(59,130,246,0.25)' } : {}}>
                {sent ? '✓ Message sent!' : '$ send_message'}
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-5">

            {/* ── RESUME DOWNLOAD ── */}
            <div className="bg-surface/70 border border-blue-DEFAULT/30 rounded-2xl p-6 backdrop-blur-md"
              style={{ boxShadow: '0 0 30px rgba(59,130,246,0.08)' }}>
              <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
                <span className="text-blue-DEFAULT font-mono text-sm">{'>'}</span> Resume
              </h3>
              <p className="text-muted text-sm mb-5 font-mono">// Download or preview my latest resume</p>

              <div className="flex gap-3">
                {/* Download button */}
                <a href="/resume.pdf" download="Roshni_Bagga_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5
                    bg-blue-DEFAULT text-white font-mono text-sm font-semibold rounded-xl
                    hover:bg-blue-bright transition-all duration-200 group"
                  style={{ boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download PDF
                </a>

                {/* Preview button */}
                <a href="/resume.pdf" target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5
                    border border-border text-muted font-mono text-sm rounded-xl
                    hover:text-white hover:border-blue-DEFAULT/50 hover:bg-blue-DEFAULT/8 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  Preview
                </a>
              </div>

              {/* Last updated note */}
              <p className="text-muted/50 text-xs font-mono mt-3 text-center">
                last updated · June 2026
              </p>
            </div>
~
            {/* Quick Info */}
            <div className="bg-surface/70 border border-border rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-blue-DEFAULT font-mono text-sm">{'>'}</span> Quick Info
              </h3>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-muted"><span className="text-blue-DEFAULT">name</span> › <span className="text-white">Roshni Bagga</span></p>
                <p className="text-muted"><span className="text-blue-DEFAULT">location</span> › <span className="text-white">Patiala, Punjab, India </span></p>
                <p className="text-muted"><span className="text-blue-DEFAULT">phone</span> › <span className="text-white">+91 9801785410</span></p>
                <p className="text-muted"><span className="text-blue-DEFAULT">email</span> › <a href="mailto:roshnibagga866@gmail.com" className="text-blue-DEFAULT hover:underline">roshnibagga8606@gmail.com</a></p>
                <p className="text-muted"><span className="text-blue-DEFAULT">status</span> › <span className="text-green-400">Open to opportunities</span></p>
              </div>
            </div>

            {/* Decorative terminal */}
            <div className="bg-surface/50 border border-border/60 rounded-2xl p-5 font-mono text-sm backdrop-blur-md">
              <p className="text-muted mb-1"><span className="text-blue-DEFAULT">$</span> ping roshnibagga.dev</p>
              <p className="text-green-400">response: open to internships &amp; full-time roles</p>
              <p className="text-muted mt-2"><span className="text-blue-DEFAULT">$</span> cat interests.txt</p>
              <p className="text-white">AI/ML · Data Products · Full Stack · Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
