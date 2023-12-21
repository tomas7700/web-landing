'use client'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <section id='hero' className='w-[full] mt-[150px] mb-[100px] flex flex-col  items-center '>
    
      <div className='flex flex-col   h-fit gap-10'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
          Unlock Effortless Growth with Your All-Access
          <br />
          Marketing Playground
        </h1>
        <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>
          Stop wrestling with code & templates. We build & tweak your web presence
          <br />
          effortlessly.</p>
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