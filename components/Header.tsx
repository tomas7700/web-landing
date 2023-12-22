'use client'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

import MenuFull from './Menu/MenuFull'
import { Link } from 'react-scroll'
import MenuShort from './Menu/MenuShort'




function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className='fixed top-4 bg-[#fff] max-h-[100px] z-40  flex flex-row gap-4 px-4 items-center justify-around w-[90%]  rounded-3xl border-black border-[4px] transition-all duration-300 ease-in-out '>

      <div className="flex  gap-1  px-5 items-center justify-center">
        <Link 
        activeClass="active" 
        to="hero" 
        spy={true} 
        smooth={true} 
        offset={50} 
        duration={500} 
        className='hidden sm:hidden lg:flex'
        >
          <Avatar className='w-[50px]'>
            <AvatarImage src="/iguana.jpg" className=' w-auto  rounded-full hover:shadow-xl' />
            <AvatarFallback>WW</AvatarFallback>
          </Avatar>
        </Link>
        <div className='flex flex-col text-[#000]  items-center justify-center '>
          <p className='p-4 sm:p-8 text-lg sm:text-2xl font-extrabold'>Web Wizzardly<span className='text-[10px] hidden lg:flex md:flex sm:hidden '>focused on generating business</span></p>
        </div>
      </div>

      <div className=' flex-row items-center justify-between px-3 hidden md:hidden lg:flex sm:hidden w-[70%] h-auto  gap-8 text-center'>
        <MenuFull/>
        <ModeToggle />
      </div>

      <div className='flex-row items-center justify-between px-2 sm:flex lg:hidden md:flex  flex w-[50%] h-auto  gap-2'>
       
      <MenuShort/>

        <ModeToggle />
      </div>
    </nav>
  )
}

export default Header