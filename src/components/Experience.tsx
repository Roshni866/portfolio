import { useRef, useState, useEffect } from 'react'

const EXPERIENCES = [
  {
    role: 'Open Source Contributor',
    company: 'GirlScript Summer of Code (GSSoC)',
    period: 'May 2025 – Oct 2025',
    points: [
      'Shipped 5+ production-merged PRs across open-source ML repositories — bug fixes, performance improvements, and new features to Python codebases via agile cycles.',
      'Diagnosed and resolved 3+ critical data quality bugs in PyTorch and Scikit-learn pipelines, enforcing data integrity standards and improving training workflow reliability.',
      'Led cross-functional code reviews with 10+ global contributors, establishing data quality gates and mentoring peers across distributed agile sprints.',
      'Authored technical documentation adopted as standards across 2 repositories, improving new contributor onboarding.',
    ],
    tags: ['Python', 'PyTorch', 'Scikit-learn', 'Git', 'Agile', 'Open Source'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="mb-14">
          <p className="font-mono text-xs text-blue-DEFAULT tracking-widest uppercase mb-3">// 03</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">Experience</h2>
          <p className="font-mono text-sm text-muted">Where I've contributed and what I've built</p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div key={i}
                className={`relative pl-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="absolute left-6 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-surface border-2 border-blue-DEFAULT z-10">
                  <div className="absolute inset-0 rounded-full bg-blue-DEFAULT/30 animate-ping" />
                </div>
                <div className="card p-6 group">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-[var(--text-primary)] font-bold text-lg group-hover:text-blue-bright transition-colors">{exp.role}</h3>
                      <p className="text-blue-DEFAULT text-sm font-mono">{exp.company}</p>
                    </div>
                    <span className="text-muted text-xs font-mono whitespace-nowrap bg-dark px-3 py-1 rounded-full border border-border">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-blue-DEFAULT mt-0.5 shrink-0">›</span>{pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-mono text-blue-DEFAULT bg-blue-DEFAULT/10 rounded-full border border-blue-DEFAULT/20">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}