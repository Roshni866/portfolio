const SOCIAL = [
  { name: 'GitHub', url: 'https://github.com/Roshni866',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013 0c2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/roshni-bagga/',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg> },
  { name: 'Instagram', url: 'https://instagram.com/roshnibagga866',
    svg: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85.15-3.23 1.67-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg> },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      <div className="glow-blob w-[600px] h-[200px] bg-blue-DEFAULT/6 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <p className="font-mono font-bold text-[var(--text-primary)] text-xl mb-3">
              <span className="text-blue-DEFAULT">&lt;</span>Roshni<span className="text-blue-DEFAULT">/&gt;</span>
            </p>
            <p className="text-muted text-sm leading-relaxed">
              CE undergrad at TIET building AI products, data pipelines, and full-stack applications. Open to opportunities.
            </p>
          </div>

          <div>
            <p className="text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-DEFAULT font-mono text-sm">{'>'}</span> Quick Info
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-muted"><span className="text-blue-DEFAULT">location</span> › <span className="text-[var(--text-primary)]">Patiala, India</span></p>
              <p className="text-muted"><span className="text-blue-DEFAULT">college</span> › <span className="text-[var(--text-primary)]">TIET, 2024–2028</span></p>
              <p className="text-muted"><span className="text-blue-DEFAULT">email</span> › <a href="mailto:roshnibagga866@gmail.com" className="text-blue-DEFAULT hover:underline">roshnibagga8606@gmail.com</a></p>
            </div>
          </div>

          <div>
            <p className="text-[var(--text-primary)] font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-DEFAULT font-mono text-sm">{'>'}</span> Find Me On
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SOCIAL.map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border text-muted
                    hover:text-[var(--text-primary)] hover:border-blue-DEFAULT/50 hover:bg-blue-DEFAULT/8 transition-all duration-200 group">
                  <span className="text-blue-DEFAULT/70 group-hover:text-blue-DEFAULT transition-colors">{s.svg}</span>
                  <span className="font-mono text-xs">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-muted text-xs font-mono">
          <span><span className="text-blue-DEFAULT">$</span> echo "Built with React &amp; Tailwind CSS"</span>
          <span>© {new Date().getFullYear()} Roshni Bagga — All Rights Reserved</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-blue-DEFAULT transition-colors">
            back_to_top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}