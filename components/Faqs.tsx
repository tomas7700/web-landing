import React from 'react'
import FaqsCards from './Cards/FaqsCards'

function Faqs() {
  return (
    <section id='faqs' className='w-screen mt-[150px] flex flex-col items-center  '>
      <div className='flex flex-col   h-fit  mb-[100px]'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center'>
          FAQs
        </h2 >
      </div>

      <div className=' flex  flex-col items-center justify-center mb-[200px]   '>

        <FaqsCards />

      </div>


    </section>
  )
}

export default Faqs