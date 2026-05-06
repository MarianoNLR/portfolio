import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 md:px-8 lg:px-10">
      <div className="dynamic-bg pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-grain" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10" />

      <Header />

      <div className="-mt-14">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App
