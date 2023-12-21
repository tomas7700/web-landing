import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

function PriceCard({ title, desc, price, benefits, link }: { title: string; desc:string;price: string; benefits: string[]; link: string }) {
  return (
    <div className=' flex flex-col gap-2 text-[#000]'>

      <div className='min-h-[150px] min-w-[200px] bg-[#fff] border-[2px] rounded-[20px]  hover:shadow-2xl  hover:-translate-y-2 transition-all ease-in-out cursor-pointer p-5 flex flex-col items-start justify-center gap-3'>
        <h3 className='text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-extrabold'>{title}</h3>
        <p className='font-light text-lg sm:text-xl md:text-2xl lg:text-3xl text-centerfont-light text-[14px] sm:text-[14px] md:text-[18px] lg:text-[18px] text-left'>{desc} </p>
        <p className=' flex flex-col font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center'>{price} <span className='text-[10px] text-gray-400'>Pause or cancel anytime</span></p>
        <div className='flex  w-full flex-col gap-2 text-left items-center justify-center mt-5 '>
          <Link href={link}>
            <Button className='lg:w-[300px] md::w-[300px] sm::w-[200px] w-[200px]' variant='destructive'>Get started Today </Button>
          </Link>
        </div>
      </div>

      <div className='bg-[#fff] border-[2px] rounded-[20px] hover:shadow-2xl  hover:-translate-y-2 transition-all ease-in-out  cursor-pointer min-w-[200px] min-h-fit flex flex-col items-center p-5 '>
        <p className='font-light text-[14px] sm:text-[14px] md:text-[18px] lg:text-[18px] text-left'>Whats include:</p>
        <ul className=' mt-5 list-disc flex flex-col gap-3'>
        {benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className='flex  w-full flex-col gap-2 text-left items-center justify-center mt-5 '>
          <Link href={link}>
            <Button className='w-[90%]'  variant='destructive'>Get started Today </Button>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default PriceCard