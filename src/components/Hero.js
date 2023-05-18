import React from 'react'
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col ">
            <span className='fs-5'> <BsFillPhoneFill className='text-warning' /> <span className='text-light'>+91-99912747</span>  </span>
            <span className='ps-5 fs-5'> <AiFillClockCircle  className='text-warning' /> <span className='text-light'>Mon-Sat: 11:00 AM - 23:00 PM</span>  </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
