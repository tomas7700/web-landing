import React from 'react'
import MissionCard from './Cards/MissionCard'
import PriceCard from './Cards/PriceCard'

function Pricing() {
    return (
        <section id='pricing' className='w-[full] mt-[150px] flex flex-col items-center '>


            <div className='flex flex-col   h-fit gap-10'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
                    Pricing
                </h2>
                <p className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>Ditch endless agency quotes</p>
            </div>

            <div className='mt-[90px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 border-[1px] p-5 bg-background/60 w-[95%] h-fit items-center justify-center'>

                < PriceCard
                    title='Basic Plan'
                    desc='One request at a time. Pause or cancel anytime.'
                    price='$500'
                    benefits={
                        [
                            'One request at a time',
                            'Average 78-hour landing page delivery',
                            'Landing page think in lead convertion',
                            'Unlimited brands',
                            'Unlimited users',
                            'Pause or cancel anytime',
                        ]
                    }
                    link='' />
                < PriceCard
                    title='Standard Plan'
                    desc='One request at a time. Pause or cancel anytime.'
                    price='$1999'
                    benefits={
                        [
                            'One requests at a time',
                            'Average 74-hour landing page delivery',
                            'Unlimited brands',
                            'Unlimited users',
                            'SEO strategy and maintenance',
                            'Pause or cancel anytime',
                            'Lead generation strategy',
                            'Inbound Marketing strategy',
                            'Maintenance of the web',
                        ]
                    }
                    link='' />
            </div>

        </section>
    )
}

export default Pricing