import React from 'react'
import './About.css'
import calc from './images/2.png'

const About = () => {
    return (
        <div className='demo' id='about'>
            <div className='container'>
                <div className='col-1'>
                    <p>ABOUT</p>
                    <p>Kalkyu!! is a group project made by 4th year Computer Science students of the Pamantasan ng Lungsod ng Maynila. Our mission is to make life easier with a little help from our product while making it universally accessible and useful.</p>
                    <p> We believe everybody has something to compute. Kalkyu!! unleashes the math in everyone — from gifted people to students finding out that computing is not really their thing. Anybody can calculate whatever they want, wherever they want.</p>
                    
                </div>
                <div className='col-2'>
                    <img src={calc} alt='calc' />
                </div>
            </div>
        </div>
    )
}

export default About
