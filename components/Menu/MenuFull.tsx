'use client'
import React from 'react'
import { Link} from 'react-scroll';
function MenuFull() {
  return (
    <ul className='flex  flex-row font-extrabold justify-around w-[100%] items-center '>
    <li className='hover:bg-[#fff] hover:text-[#FF6B00] hover:border-black hover:shadow-xl transition-all text-[#000] ease-in-out cursor-pointer px-3 py-1 rounded-[40px]'>
      <Link
         activeClass="active" 
         to="mission" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
      >
        Benefits
      </Link>
      </li>
    <li className='hover:bg-[#fff] hover:text-[#FF6B00] hover:border-black hover:shadow-xl transition-all text-[#000] ease-in-out cursor-pointer px-3 py-1 rounded-[40px]'>
      <Link
         activeClass="active" 
         to="developments" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} >
          How it works
    </Link>
    </li>
    <li className='hover:bg-[#fff] hover:text-[#FF6B00] hover:border-black hover:shadow-xl transition-all text-[#000] ease-in-out cursor-pointer px-3 py-1 rounded-[40px]'>
      <Link
         activeClass="active" 
         to="pricing" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} 
         >
          Pricing
      </Link>
      </li>
    <li className='hover:bg-[#fff] hover:text-[#FF6B00] hover:border-black hover:shadow-xl transition-all text-[#000] ease-in-out cursor-pointer px-3 py-1 rounded-[40px]'>
      <Link
         activeClass="active" 
         to="faqs" 
         spy={true} 
         smooth={true} 
         offset={50} 
         duration={500} >
          FAQs
          </Link>
      </li>
    <li className='bg-[#FF6B00] px-3 py-1 rounded-[40px] text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[#FF6B00] hover:shadow-xl'>
    Login
    </li>
  </ul>

  )
}

export default MenuFull