'use client'
import React from 'react'
import ForYouTabs from './Cards/ForYouTabs'
import Image from 'next/image'
import { Link } from 'react-scroll'

function Ideal() {
  return (
    <section className='w-[full]  flex flex-col mt-[100px] items-center '>
      <div className='flex flex-col   h-fit gap-10'>

        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
          Find out if my service is ideal for you
        </h2>
        <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>
          If you re tired of a website that doesn t work, and you re ready to take your business to the next level, then our all-access marketing playground is for you.
        </p>
      </div>

      <div className='flex '>
      <ForYouTabs />
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
                  <button className="button-74" role="button">Join now</button>
              </Link>
      </div>
    </section>
  )
}

export default Ideal