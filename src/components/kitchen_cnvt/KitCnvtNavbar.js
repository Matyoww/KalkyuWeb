import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../cnvt_components/cnvt-images/7.png'
import { Link } from 'react-scroll'

import './KitCnvtNavbar.css'

const KitCnvtNavbar = () => {

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
                        <Link to="weight" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>WEIGHT</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="temperature" spy={true} smooth={true} duration={500} onClick={closeMenu}>TEMPERATURE</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="volume" spy={true} smooth={true} duration={500} onClick={closeMenu}>VOLUME</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default KitCnvtNavbar
