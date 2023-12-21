'use client'
import React from 'react'
import { Link } from 'react-scroll'

function Info() {
    return (
        <section className='w-[full] mt-[150px] flex flex-col items-center  '>
            <div className='flex flex-col   h-fit gap-10'>
                <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-[#FF6B00] '>Boost your business today</p>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
                    Laugh Your Way to Higher Sales & Conversions
                </h1>
            </div>

            <div className='flex flex-col m-4 lg:m-20 md:m-10 sm:m-4 items-center justify-center'>

                <div className='flex flex-row   w-full'>
                    <p className='font-light   text-lg sm:text-xl md:text-2xl lg:text-3xl   text-left w-[60%] mt-10'>
                        Make Your Website So Engaging, People become costumers
                    </p>
                </div>
                
                <div className='flex flex-row  w-full mt-16 '>
                    <p className='font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-right self-end mt-10'>
                        Our websites are more than just a place to sell your products or services. They re an experience that will leave your visitors laughing, learning, and wanting more. And its all for one flat fee.
                    </p>
                </div>

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
          <button className="button-74" role="button">Get start today</button>
              </Link>
              
            </div>
        </section>
    )
}

export default Info