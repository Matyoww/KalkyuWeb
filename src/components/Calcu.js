import React from 'react'
import CalcuImg from './images/6.png'
import './Calcu.css'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const Calcu = () => {
    return (
        <div className='about' id='calculator'>
            <div className='container'>
                <img src={CalcuImg} alt='CalcuImg' />
                <div className='col-2'>
                    <h2>Calculator</h2>
                    <span className='line'></span>
                    <p>DON'T GET AN EIGHT DIGIT CALCULATOR IF YOU HAVE TWELVE DIGIT NEEDS.</p>
                    <Link to="basiccalc">
                        <Button variant='contained' size='large'>Go to Calculator</Button>
                    </Link>

                    
    
                </div>
            </div>
        </div>
    )
}

export default Calcu
