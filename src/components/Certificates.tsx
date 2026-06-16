import { useRef, useState, useEffect } from 'react'

const CERTS = [
  {
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Forage',
    date: '2025',
    skills: ['Cloud Architecture', 'AWS Services', 'System Design', 'Scalability'],
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Forage',
    date: '2025',
    skills: ['Data Analytics', 'Business Intelligence', 'SQL', 'Insights Reporting'],
  },
]

const BadgeIcon = () => (
  <svg className="w-6 h-6 text-blue-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
  </svg>
)

export default function Certificates() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certificates" className="py-24 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="mb-14">
          <p className="font-mono text-xs text-blue-DEFAULT tracking-widest uppercase mb-3">// 05</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">Certifications</h2>
          <p className="font-mono text-sm text-muted">Industry simulations and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {CERTS.map((cert, i) => (
            <div key={i}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}>
              <div className="card h-full overflow-hidden group">
                <div className="h-0.5 bg-gradient-to-r from-blue-dim via-blue-DEFAULT to-blue-bright" />
                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-blue-DEFAULT/10 border border-blue-DEFAULT/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BadgeIcon />
                  </div>
                  <h3 className="text-[var(--text-primary)] font-bold text-base mb-2 group-hover:text-blue-bright transition-colors">{cert.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted mb-4">
                    <span>{cert.issuer}</span>
                    <span className="text-border">•</span>
                    <span className="text-blue-DEFAULT">{cert.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(s => (
                      <span key={s} className="px-2 py-1 text-xs font-mono text-muted bg-white/5 rounded border border-border">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}