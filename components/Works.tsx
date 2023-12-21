'use client'
import React from 'react'
import MissionCard from './Cards/MissionCard'
import { Link } from 'react-scroll'

function Works() {
    return (
        <section className='w-[full] mt-[150px] flex flex-col items-center '>
            <div className='flex flex-col   h-fit gap-10'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
                    Recent work <br />
                    Award winning designs, and nothing less.
                </h2>

            </div>

            <div className='flex flex-col mt-10 items-center justify-center'>




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
                    <button className="button-74" role="button">Boost your business today</button>
                </Link>

            </div>
        </section>
    )
}

export default Works