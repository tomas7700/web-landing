'use client'
import React from 'react'
import { Link } from 'react-scroll'

function Testimonials() {
  return (
    <section className='w-[full] mt-[150px] flex flex-col items-center  '>
      <div className='flex flex-col   h-fit gap-10'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
          See What Our Clients Are Saying
        </h2>
        <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>
          Our clients love our all-access marketing playground. They say it's the best investment they've ever made in their business
        </p>
      </div>

      <div className='flex flex-col'>

      </div>

      <div className='flex justify-center items-center   mt-16 flex-col'>
        <Link
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <button className="button-74" role="button">Start Now</button>
        </Link>
      </div>

    </section>
  )
}

export default Testimonials