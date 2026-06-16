import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen page-gradient text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Certificates />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
