import { useState, useEffect } from 'react'

const NAV = ['home','about','skills','experience','projects','certificates','contact']

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)
      const pos = window.scrollY + 130
      for (let i = NAV.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV[i])
        if (el && el.offsetTop <= pos) { setActive(NAV[i]); break }
      }
    }
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => go('home')} className="font-mono font-bold text-white text-lg flex items-center gap-1 hover:opacity-80 transition-opacity">
          <span className="text-blue-DEFAULT">&lt;</span>Roshni<span className="text-blue-DEFAULT">/&gt;</span>
        </button>

        <div className="hidden md:flex gap-0.5">
          {NAV.map(id => (
            <button key={id} onClick={() => go(id)}
              className={`px-3 py-1.5 text-sm rounded-lg font-mono transition-all duration-200 ${
                active === id
                  ? 'text-blue-DEFAULT bg-blue-DEFAULT/10'
                  : 'text-muted hover:text-white hover:bg-white/5'
              }`}>
              {id}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-2">
          {[0,1,2].map(i => (
            <span key={i} className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              i===0&&open?'rotate-45 translate-y-2':i===1&&open?'opacity-0':i===2&&open?'-rotate-45 -translate-y-2':''
            }`} />
          ))}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        open ? 'max-h-96 border-b border-border' : 'max-h-0'
      } bg-dark/95 backdrop-blur-md`}>
        <div className="px-4 py-3 flex flex-col gap-1">
          {NAV.map(id => (
            <button key={id} onClick={() => go(id)}
              className={`text-left px-4 py-3 text-sm font-mono rounded-lg transition-all ${
                active === id ? 'text-blue-DEFAULT bg-blue-DEFAULT/10' : 'text-muted hover:text-white'
              }`}>{id}</button>
          ))}
        </div>
      </div>
    </nav>
  )
}
