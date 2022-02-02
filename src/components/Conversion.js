import React from 'react'
import './Conversion.css'
import CnvtNavbar from './cnvt_components/CnvtNavbar'
import Length from './cnvt_components/Length';
import Volume from './cnvt_components/Volume';
import Mass from './cnvt_components/Mass';
import Speed from './cnvt_components/Speed';
import Time from './cnvt_components/Time';



function Conversion() {
    return (
      <div id="conversion">
        <CnvtNavbar />
        <Length />
        <Volume />
        <Mass />
        <Speed />
        <Time />
      </div>
    )
  }
  
  export default Conversion




