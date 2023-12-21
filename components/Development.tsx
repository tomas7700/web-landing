'use client'
import React from 'react'
import TabTimeLine from './Cards/TabTimeLine'
import { Link } from 'react-scroll'
function Development() {
    return (
        <section id='developments' className='w-full mt-[150px] flex flex-col items-center  '>
            <div className='flex flex-col   h-fit gap-10'>
                <h2  className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
                    Development Timeline
                </h2>
            </div>
            <div className='flex flex-col w-full items-center'>
                <TabTimeLine/>

            </div>
            <div className='flex justify-center items-center   mt-5 flex-col'>
                <Link
                       activeClass="active"
                       to="pricing"
                       spy={true}
                       smooth={true}
                       offset={50}
                       duration={500}
                >
                <button className="button-74" role="button">  I want to star now </button>
                </Link>
            </div>

        </section>
    )
}

export default Development