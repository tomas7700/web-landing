'use client'

import { Tab } from '@headlessui/react'
import { BarChart3, Building, TrendingUp, UserRound } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'


function classNames(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}


function ForYouTabs() {

    let [categories] = useState({
        ' entrepreneurs and solopreneurs': [
            {
                id: 1,
                title: "Offers a convenient, all-in-one solution without requiring them to hire multiple agencies.",
               benefits:'Unlimited brands and users cater to their expanding ventures, while the 48-hour delivery ensures quick turnaround. Lead generation and SEO strategies help their businesses grow.',
                iconTab: <UserRound className='w-[30px] h-[30px]' />,
                icon: <UserRound color="#00ff88" className='w-[40px] h-[40px] border-green' />,
                gif:  <Image
                src='/animation-business.gif'
                alt='Decoration for digital marketing agency'
                height={150}
                width={150}
            />,

            },
        ],
        ' Startups and small businesses on a budget': [

            {
                id: 2,
                title: 'Lower cost and effective website solution without compromising quality.A subscription model that suits your limited budget while delivering all the value that you search.',
                benefits:'The Standard Plan is ideal for you because it provides all the essential features like SEO, lead generation, and easy payments. Pause/cancel flexibility gives them control over spending.', 
                iconTab: <TrendingUp className='w-[30px] h-[30px]' />,
                icon: <TrendingUp  color="#ff7300" className='w-[40px] h-[40px]' />,
                gif:  <Image
                src='/animation-entrepreneurs.gif'
                alt='Decoration for digital marketing agency'
                height={150}
                width={150}
            />,
            },
        ],
        'Businesses with outdated websites': [
            {
                id: 3,
                title: "Having an outdated website is a big problem not only for the SEO, but also in converting leads and generating business. With SEO and lead generation strategies you can boost your online presence.",
                benefits:'The web maintenance ensures your  website stays fresh and functional, while inbound marketing strategies attract new customers. You would receive a website that works and generates leads.', 
                iconTab: <BarChart3 className='w-[30px] h-[30px]' />,
                icon: <BarChart3 color="#002aff" className='w-[40px] h-[40px]' />,
                gif:  <Image
                src='/stadistics-animation.gif'
                alt='Decoration for digital marketing agency'
                height={150}
                width={150}
            />,
            },
        ],
        'Organizations struggling with marketing and web management': [
            {
                id: 4,
                title: "Lack of internal resources or marketing expertise to handle everything. The service acts as a dedicated team, taking care of your website needs.",
                benefits:'Having unlimited users allows for collaboration within the team. The $1000 plan s dual-application feature accommodates your increased workload. The inclusion of domain and hosting simplifies management.', 
                iconTab: <Building  className='w-[30px] h-[30px]'  />,
                icon: <Building color="#00ff88"  className='w-[40px] h-[40px]' />,
                gif:  <Image
                src='/animation-card.gif'
                alt='Decoration for digital marketing agency'
                height={150}
                width={150}
                className='rounded-2xl'
            />,
            },
        ],
    })

    return (
        <div className=" flex lg:flex-row md:flex-col sm:flex-col flex-col w-fit gap-5 px-2 py-16 sm:px-0 ">
            <Tab.Group>
                <Tab.List className="max-w-[180px]   space-x-1 rounded-[40px] border-[5px] border-foreground p-2 flex lg:flex-col   md:flex-row sm:flex-row flex-row justify-around">

                    {Object.entries(categories).map(([category, posts], idx) => (
                        <Tab key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-[40px] py-1 text-sm font-medium leading-5 ',
                                    'ring-white/60 ring-offset-2 ring-offset-[#FF6B00] focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-background/50 text-[#FF6B00] shadow'
                                        : ' hover:bg-white/[0.12] hover:text-black'
                                )
                            }>
                            <div className='flex flex-col gap-2 items-center justify-center'>
                                {posts.map((post) => (
                                    <>
                                        {post.iconTab}
                                        <h3 className='font-bold mt-3 text-[20px]  hidden lg:block md:hidden sm:hidden' >{category}</h3>
                                    </>
                                ))}
                            </div>
                        </Tab>
                    ))}
                   
                </Tab.List>
                <Tab.Panels className="mt-2 min-w-[300px] min-h-fit max-h-fit p-5 border-[5px] rounded-[30px] border-foreground">

                    {Object.entries(categories).map(([category, posts], idx) => (
                        <Tab.Panel key={idx} className=' p-3'>
                            <div>
                                {posts.map((post) => (
                                    <>
                                        {post.icon}
                                        <p className="font-bold mt-3 text-[30px]">{category}</p>
                                        <p className="text-[20px] mt-10 font-normal leading-8">
                                            {post.title}
                                        </p>
                                        <br />
                                        <p className='font-light mt-3 text-[15px] text-gray-400'> 
                                            <span className='font-extrabold'>Benefits: </span>
                                            {post.benefits}
                                        </p>
                                        {post.gif}
                                    </>
                                ))}
                            </div>    
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ForYouTabs