import { useRef, useState, useEffect } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        <div className="mb-14">
          <p className="font-mono text-xs text-blue-DEFAULT tracking-widest uppercase mb-3">// 01</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3 tracking-tight">About Me</h2>
          <p className="font-mono text-sm text-muted">Engineer · Builder · Data Enthusiast</p>
        </div>

        <div className="bg-surface/70 border border-border rounded-2xl overflow-hidden backdrop-blur-md">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-card">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-muted text-xs font-mono">about.sh</span>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed space-y-5">
            <p className="text-blue-DEFAULT">#!/bin/bash</p>

            <p className="text-[var(--text-primary)]/85 text-base leading-7">
              I'm <span className="text-blue-DEFAULT font-semibold">Roshni Bagga</span> — a Computer Engineering student
              at <span className="text-[var(--text-primary)] font-semibold">Thapar Institute of Engineering & Technology</span> (GPA: 9.43),
              and I build things that actually ship.
            </p>

            <p className="text-[var(--text-primary)]/85 text-base leading-7">
              Most of my projects start with a real problem — fraud hiding in <span className="text-blue-bright">284K transactions</span>,
              resumes that never make it past an ATS, codebases nobody can quickly understand. I write the ML pipeline,
              build the <span className="text-blue-bright">API around it, deploy it, and keep it running</span>.{' '}
              <span className="text-[var(--text-primary)] font-semibold">RepoLens</span>, my current project, is a live AI tool that
              analyzes any GitHub repository and is used by real people right now.
            </p>

            <p className="text-[var(--text-primary)]/85 text-base leading-7">
              I've contributed to <span className="text-blue-bright">open-source ML repositories</span> through GSSoC,
              reviewed code with contributors across time zones, and written documentation that became the standard
              for two projects. I work well in distributed teams and I don't need hand-holding to ship.
            </p>

            <p className="text-[var(--text-primary)]/85 text-base leading-7">
              I'm looking for <span className="text-green-400">internships or roles in AI/ML or full-stack engineering</span>{' '}
              where I can build impactful products and grow as an engineer.
            </p>

            <div className="pt-5 border-t border-border grid sm:grid-cols-3 gap-4">
              <p className="text-muted"><span className="text-blue-DEFAULT">education</span> › <span className="text-[var(--text-primary)]">B.Tech CE, TIET</span></p>
              <p className="text-muted"><span className="text-blue-DEFAULT">status</span> › <span className="text-green-400">Open to opportunities</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}