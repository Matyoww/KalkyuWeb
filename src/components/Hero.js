import React from 'react'
import './Hero.css'
import image from './images/1.png'

const Hero = () => {
    return (
        <div className='hero' id='hero'>
            <div className='content'>
                <div className='container_right'>
                    <p>Get peace of mind knowing that you don’t have to manually calculate.</p>
                </div>
                <div className='container_left'>
                    <img src={image} alt='image' />
                </div>
                
            </div>
        </div>
    )
}

export default Hero
