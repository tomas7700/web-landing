'use client'

import { Tab } from '@headlessui/react'
import { Bell, CalendarCheck, TrendingUp, Wrench } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'


function classNames(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}


function TabTimeLine() {

    let [categories] = useState({
        'Seamless Task Initiation': [
            {
                id: 1,
                title: "Your journey begins when you effortlessly submit a task. Whether it's a new landing page or a blog article, just share your idea or topic, and our team takes it from there.",
                iconTab: <Bell className='w-[30px] h-[30px]' />,
                icon: <Bell color="#00ff88" className='w-[40px] h-[40px] border-green' />,
            },
        ],
        'Strategic Business Integration': [

            {
                id: 2,
                title: 'Behind the scenes, our experts not only fulfill your request but also integrate it strategically into your overall business objectives. Each task contributes to your business s growth, aligning with our commitment to continuous improvement.',
                iconTab: <TrendingUp className='w-[30px] h-[30px]' />,
                icon: <TrendingUp  color="#ff7300" className='w-[40px] h-[40px]' />,
            },
        ],
        ' Proactive SEO and Web Maintenance': [
            {
                id: 3,
                title: "Simultaneously, our team proactively manages SEO and web maintenance. Your website is continuously optimized to stay ahead in search rankings, ensuring a robust online presence without you having to request specific actions.",
                iconTab: <Wrench className='w-[30px] h-[30px]' />,
                icon: <Wrench color="#002aff" className='w-[40px] h-[40px]' />,
            },
        ],
        'Monthly Business Innovation Session': [
            {
                id: 4,
                title: "Every month, we conduct a dedicated business innovation session. Our team brainstorms and formulates strategies to enhance your overall marketing approach, consistently aiming to generate more business and refine your digital presence.",
                iconTab: <CalendarCheck className='w-[30px] h-[30px]' />,
                icon: <CalendarCheck color="#00ff88"  className='w-[40px] h-[40px]' />,
            },
        ],
    })

    return (
        <div className="w-fit   px-2 py-16 sm:px-0">
            <Tab.Group >
                <Tab.List className="flex space-x-1 rounded-[40px] border-[5px] border-foreground p-2">

                    {Object.entries(categories).map(([category, posts], idx) => (
                        <Tab key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full rounded-[40px] py-1 text-sm font-medium leading-5',
                                    'ring-white/60 ring-offset-2 ring-offset-[#FF6B00] focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-background/50 text-[#FF6B00] shadow'
                                        : ' hover:bg-white/[0.12] hover:text-black'
                                )
                            }>
                            <div className='flex flex-row gap-2 items-start justify-center'>
                                {posts.map((post) => (
                                    <>
                                        {post.iconTab}
                                        <h3 className='font-bold mt-3 text-[20px]  hidden sm:block ' >{category}</h3>
                                    </>
                                ))}
                            </div>
                        </Tab>
                    ))}
                   
                </Tab.List>
                <Tab.Panels className="mt-2 min-h-[300px] p-5 border-[5px] rounded-[30px] border-foreground">


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

export default TabTimeLine