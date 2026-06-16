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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">About Me</h2>
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

            <p className="text-white/85 text-base leading-7">
              I'm <span className="text-blue-DEFAULT font-semibold">Roshni Bagga</span> — a Computer Engineering student
              at <span className="text-white font-semibold">Thapar Institute of Engineering & Technology</span> (GPA: 9.43),
              obsessed with turning raw data into products that actually matter.
            </p>

            <p className="text-white/85 text-base leading-7">
              I don't just write code — I build <span className="text-blue-bright">end-to-end data products</span>: from
              designing scalable REST API backends and ML pipelines to shipping AI-powered tools used by real users.
              Whether it's detecting credit card fraud across 284K transactions or semantically matching resumes to job
              descriptions using BERT, I obsess over <span className="text-blue-bright">data quality, reproducibility,
              and product impact</span>.
            </p>

            <p className="text-white/85 text-base leading-7">
              My edge is the intersection of <span className="text-blue-bright">AI/ML engineering and full-stack development</span> —
              I can take a model from experimentation to a live, deployed product. I've shipped contributions to
              open-source ML repositories, debugged PyTorch pipelines under real production constraints, and mentored
              contributors across distributed teams.
            </p>

            <p className="text-white/85 text-base leading-7">
              I'm actively seeking <span className="text-green-400">internship and full-time opportunities</span> in
              data engineering, AI/ML, or product development where I can build things that scale.
            </p>

            <div className="pt-5 border-t border-border grid sm:grid-cols-3 gap-4">
              {/* <p className="text-muted"><span className="text-blue-DEFAULT">location</span> › <span className="text-white">📍 Patiala, India</span></p> */}
              <p className="text-muted"><span className="text-blue-DEFAULT">education</span> › <span className="text-white">B.Tech CE, TIET</span></p>
              <p className="text-muted"><span className="text-blue-DEFAULT">status</span> › <span className="text-green-400">Open to opportunities</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
