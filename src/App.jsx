
import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';
import Testimonial from './components/testimonial/Testimonial';



function App() {


  return (
    <>
      <Sidebar />
      <main>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  )
}

export default App
