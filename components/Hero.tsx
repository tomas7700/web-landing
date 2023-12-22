'use client'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <section id='hero' className='w-[full] mt-[150px] mb-[100px] flex flex-col  items-center '>
    
      <div className='flex flex-col   items-center justify-center h-fit gap-10'>
        <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
        Unlock your business potential with our award winning digital marketing solutions.
        </p>
        <div className='w-[75%]'>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>
        Double your leads & boost conversions with our data-driven digital marketing agency
        </h1>
        <p className='font-light text-md sm:text-md md:text-lg lg:text-xl text-center'>
        Get a stunning website + powerful marketing that drives sales - all for a fixed price
        </p>
        </div>
   
      </div>

      <div className='flex justify-center items-center   mt-[100px] flex-col'>
        <Link
                    activeClass="active"
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
             >
                 <button className="button-74" role="button">Get Your Conversion Engine Started Today</button>
        </Link>
     
      </div>

    </section>
  )
}

export default Hero