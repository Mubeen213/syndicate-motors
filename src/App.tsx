import Header from './components/Header'
import Hero from './components/Hero'
import PremiumShowcase from './components/PremiumShowcase'
import FeaturedCars from './components/FeaturedCars'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="inventory">
          <PremiumShowcase />
          <FeaturedCars />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
