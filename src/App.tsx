
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Program from './components/program'
import Title from './components/title'
import About from './components/about'
import Campus from './components/campus'
import Testimonial from './components/testimonial'
import Contact from './components/Contact'
import Footer from './components/footer'
import Videoplayer from './components/Videoplayer'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { useState } from 'react'
const App = () => {
  const [playState , setPlayState] = useState(false);
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title title='What We Offers' subtitle='Our Program'/>
    <Program/>
    <About setPlayState={setPlayState}/>
    <Title title='Campus Photos' subtitle='Gallery'/>
    <Campus/>
    <Title title='What Students Says' subtitle='TESTIMONIALS'/>
    <Testimonial/>
    <Title title='Get in Touch' subtitle='Contact Us'/>
    <Contact/>
    <Footer/>
    {/* <Videoplayer playState={playState} setPlayState={setPlayState}/> */}
    </div>
    </>
   
  )
}

export default App