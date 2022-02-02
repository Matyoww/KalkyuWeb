import * as React from "react";
import Navbar from './Navbar'
import Hero from './Hero'
import Calcu from './Calcu'
import ConOpt from './ConOpt'
import Footer from './Footer'

function Homepage() {
  return(
    <div>
      <Navbar />
      <Hero />
      <ConOpt />
      <Calcu />
      <Footer />
    </div>
  )
}

export default Homepage