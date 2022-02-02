import React from 'react'
import './KitConversion.css'
import KitCnvtNavbar from './KitCnvtNavbar'
import Volume from './Volume'
import Weight from './Weight'
import Temperature from './Temperature'

function KitConversion() {
  return (
    <div id="conversion">
      <KitCnvtNavbar />
      <Weight />
      <Temperature />
      <Volume />
    </div>
  )
}

export default KitConversion




