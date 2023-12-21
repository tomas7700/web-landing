'use client'
import React from 'react'
import MissionCard from './Cards/MissionCard'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-scroll'

function Mission() {
    return (
        <section id='mission' className='w-[full] mt-[150px] flex flex-col items-center '>
            <div className='flex flex-col   h-fit gap-10'>
                <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-[#FF6B00] '>Web wizzardly  MISSION!!</p>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
                    Redefining Software Development
                </h2>
                <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl  text-center'>
                    Escape the Marketing Hamster Wheel: Unlimited Growth, 1 Flat Fee.
                </p>
            </div>

            <div className='flex flex-col mt-10 items-center justify-center'>
                <div className='mt-[90px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  p-5 '>

                    <MissionCard icon={<CheckCircle2 color="#00ff62" />} title='Reduce Costs' desc='Minimize unnecessary costs hiring expensive or unqualified people. Let us focus on high ROI development tasks while you focus on your business.' />
                    <MissionCard icon={<CheckCircle2 color="#00ff62" />} title='Increase Speed' desc='Eliminate slowdowns with speedier project cycles and fewer meetings, accelerating your development process by up to 4x.' />
                    <MissionCard icon={<CheckCircle2 color="#00ff62" />} title='Quality Control' desc='Ensure high quality development by minimizing miscommunication and inconsistencies through project management.' />
                </div>
                <div className='flex flex-row items-center justify-end  mt-10 gap-10'>
                    <Image
                        src='/stadistics-animation.gif'
                        alt='Decoration for digital marketing agency'
                        height={150}
                        width={150}
                    />
                    <p className='font-light  text-lg sm:text-xl md:text-2xl lg:text-3xl text-right w-[80%]  '>
                        We dont code, we conjure website brilliance. Our custom-built websites are designed to convert visitors into customers, and theyre backed by a team of experts who are always there to help, and deliver in less than 3 days
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

export default Mission