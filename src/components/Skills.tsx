import { useRef, useState, useEffect } from 'react'

const CATEGORIES = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'C', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Frameworks & Technologies',
    skills: ['React', 'Node.js', 'FastAPI', 'Streamlit', 'REST APIs', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'BERT', 'Hugging Face'],
  },
  {
    label: 'Developer Tools',
    skills: ['Git / GitHub', 'VS Code', 'Jupyter', 'Vercel', 'MySQL', 'MongoDB', 'OpenCV', 'Claude API'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="glow-blob w-[400px] h-[300px] bg-blue-DEFAULT/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className={`max-w-6xl mx-auto relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        <div className="flex items-center gap-5 mb-14">
          <div>
            <p className="font-mono text-xs text-blue-DEFAULT tracking-widest uppercase mb-1">// 02</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">Technical Skills</h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-DEFAULT/40 to-transparent mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.label}
              className={`rounded-2xl p-7 border border-border/60 bg-surface/50 backdrop-blur-sm
                transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${ci * 100}ms` }}>
              <h3 className="text-blue-DEFAULT font-bold text-base mb-3">{cat.label}</h3>
              <div className="h-px bg-border mb-6" />
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => (
                  <span key={skill}
                    className={`px-3 py-1.5 text-sm text-[var(--text-primary)] font-mono rounded-lg border border-border/80 bg-dark/60
                      hover:border-blue-DEFAULT/50 hover:bg-blue-DEFAULT/8 transition-all duration-200 cursor-default
                      ${visible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${ci * 100 + si * 35 + 250}ms`, transition: 'opacity 0.5s, border-color 0.2s, color 0.2s, background 0.2s' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}