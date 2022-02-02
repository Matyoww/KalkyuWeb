import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    |
                    <li className='nav-item'>
                        <a href='#conversion'>Conversion</a>
                    </li>
                    |
                    <li className='nav-item'>
                        <a href='#calculator'>Calculator</a>
                    </li>
                    |
                    <li className='nav-item'>
                        <a href='#about'>Demo</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <p>Kalkyu @ 2022. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
