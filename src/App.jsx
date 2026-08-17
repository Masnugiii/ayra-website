import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductConfigurator from './components/ProductConfigurator'
import Awards from './components/Awards'
import Marketplace from './components/Marketplace'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ChatButton from './components/ChatButton'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div id="top" className="relative isolate min-h-svh bg-ayra-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[1100] focus:bg-ayra-forest focus:px-4 focus:py-2 focus:text-ayra-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-0">
        <Hero />
        <ProductConfigurator />
        <Awards />
        <Marketplace />
        <Newsletter />
      </main>
      <Footer />
      <ChatButton />
      <BackToTop />
    </div>
  )
}
