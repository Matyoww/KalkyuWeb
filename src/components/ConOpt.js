import React from 'react'
import user1 from './images/3.png'
import user2 from './images/4.png'
import user3 from './images/5.png'
import './ConOpt.css'
import { FiArrowDownCircle } from "react-icons/fi";
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const ConOpt = () => {
    return (
        <div className='testimonials' id='conversion'>
            <div className='container'>
                <h2>Conversion</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p><span>Unit Measurement</span></p>
                        <p>length, mass, volume, speed, time</p>
                        <Link to="conpage">
                            <Button>
                                <FiArrowDownCircle style={{color: '#5EC57E', fontSize: '50px'}}/>
                            </Button>
                        </Link>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user2'/>
                        <p><span>Kitchen Measurement</span></p>
                        <p>weight, oven temperature, liquid volume</p>
                        <Link to="kitchenconpage">
                            <Button>
                                <FiArrowDownCircle style={{color: '#5EC57E', fontSize: '50px'}}/>
                            </Button>
                        </Link>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user3'/>
                        <p><span>Number System</span></p>
                        <p>binary, hexadecimal, decimal, octal</p>
                        <Link to="numbersystem">
                            <Button>
                                <FiArrowDownCircle style={{color: '#5EC57E', fontSize: '50px'}}/>
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConOpt
