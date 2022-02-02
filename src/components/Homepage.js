import * as React from "react";
import Navbar from './Navbar'
import Hero from './Hero'
import Calcu from './Calcu'
import ConOpt from './ConOpt'
import Footer from './Footer'
import About from "./About";

function Homepage() {
  return(
    <div>
      <Navbar />
      <Hero />
      <ConOpt />
      <Calcu />
      <About />
      <Footer />
    </div>
  )
}

export default Homepage