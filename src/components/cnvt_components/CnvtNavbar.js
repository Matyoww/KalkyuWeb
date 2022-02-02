import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './cnvt-images/7.png'
import { Link } from 'react-scroll'

import './CnvtNavbar.css'

const CnvtNavbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="length" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>LENGTH</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="volume" spy={true} smooth={true}  duration={500} onClick={closeMenu}>VOLUME</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="mass" spy={true} smooth={true}  duration={500} onClick={closeMenu}>MASS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="speed" spy={true} smooth={true}  duration={500} onClick={closeMenu}>SPEED</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CnvtNavbar

function length(){
    return(
        <div className='length-con'>
            

        </div>
    )
}
