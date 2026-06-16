import { useRef, useState, useEffect } from 'react'

const PROJECTS = [
  {
    title: 'RepoLens',
    desc: 'Live AI data product that ingests any GitHub repository and surfaces 3+ analytical insight categories — code quality, contributor patterns, activity trends — for real users.',
    tags: ['Python', 'FastAPI', 'Groq', 'GitHub API', 'React', 'Vercel','Render'],
    github: 'https://github.com/Roshni866/Git_repo_analyzser',
    live: 'https://git-repo-analyzser.vercel.app/',
    featured: true,
  },
  {
    title: 'Cache — Credit Card Fraud Detection',
    desc: 'ML pipeline for financial fraud detection achieving 86.76% recall on a 284K-transaction dataset. Benchmarked 4 algorithms; applied SMOTE oversampling to resolve 0.17% class imbalance.',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SMOTE', 'REST API'],
    github: 'https://github.com/roshnibagga',
    live: '',
    featured: true,
  },
//   {
//     title: 'HireIQ — AI Resume Analyzer',
//     desc: 'NLP-powered ATS keyword-gap analyzer using BERT-based semantic similarity scoring across 10+ resume-JD pairs, generating structured optimization reports end-to-end.',
//     tags: ['Python', 'BERT', 'NLP', 'Flask', 'Scikit-learn', 'PyPDF2'],
//     github: 'https://github.com/roshnibagga',
//     live: '',
//     featured: true,
//   },
  {
    title: 'Emotion Classifier',
    desc: 'This project implements and evaluates three different deep learning models to classify text comments into emotion categories (Joy, Fear, Anger). The project includes complete data exploration, preprocessing, model development, training, and comparative performance analysis.',
    tags: ['Python', 'TensorFlow', 'Deep Learning', 'CNN-LSTM', 'Machine Learning', 'NLP'],
    github: 'https://github.com/Roshni866/Emotion_Classifier',
    live: '',
    featured: false,
  },
]

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
)

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState<'all'|'featured'>('all')
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const shown = filter === 'featured' ? PROJECTS.filter(p => p.featured) : PROJECTS

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="mb-14">
          <p className="font-mono text-xs text-blue-DEFAULT tracking-widest uppercase mb-3">// 04</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Projects</h2>
          <p className="font-mono text-sm text-muted">Data products and applications I've shipped</p>
        </div>

        <div className="flex gap-3 mb-10">
          {(['all','featured'] as const).map(tab => (
            <button key={tab} onClick={() => setFilter(tab)}
              className={`px-5 py-2 text-sm font-mono rounded-lg transition-all ${
                filter === tab ? 'bg-blue-DEFAULT text-white' : 'bg-surface border border-border text-muted hover:text-white hover:border-blue-DEFAULT/40'
              }`}
              style={filter === tab ? { boxShadow: '0 0 15px rgba(59,130,246,0.3)' } : {}}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {shown.map((p, i) => (
            <div key={p.title}
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}>
              <div className="card h-full p-6 group flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <svg className="w-8 h-8 text-blue-DEFAULT/60 group-hover:text-blue-DEFAULT transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>
                  </svg>
                  {p.featured && <span className="px-2 py-0.5 text-xs font-mono text-blue-DEFAULT bg-blue-DEFAULT/10 rounded border border-blue-DEFAULT/20">★ featured</span>}
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-bright transition-colors">{p.title}</h3>
                <p className="text-muted text-sm mb-4 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-mono text-muted bg-dark rounded border border-border">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted border border-border rounded-lg hover:text-white hover:border-blue-DEFAULT/40 transition-all">
                    <GithubIcon /> code
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-muted border border-border rounded-lg hover:text-white hover:border-blue-DEFAULT/40 transition-all">
                      <ExternalIcon /> live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
