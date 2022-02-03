import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

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
                        <a href='#about'>About</a>
                    </li>
                    |
                    <li className='nav-item'>
                        <Link to="conpage">Unit Measurement</Link>
                    </li>
                    |
                    <li className='nav-item'>
                        <Link to='kitchenconpage'>Kitchen Measurement</Link>
                    </li>
                    |
                    <li className='nav-item'>
                        <Link to='numbersystem'>Number System</Link>
                    </li>
                </ul>
                <hr/>
                <p>© Copyright 2022 | KALKYU!! | All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
