import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {faqs}  from '@/constants/Faqs-info'
function FaqsCards() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 ' >
    {
        faqs.map((faq) => (
        <Accordion key={faq.name} className='shadow-2xl p-3 text-black bg-[#fff] lg:min-w-[600px] lg:max-w-[600px] md:min-w-[500px] md:max-w-[500px] sm:min-w-[90%] sm:max-w-[90%] min-w-[90%] max-w-[90%]' type="single" collapsible>
        <AccordionItem value={faq.name}>
            <AccordionTrigger> <h3> {faq.title}</h3></AccordionTrigger>
            <AccordionContent className=' '>
                <p>{faq.description}</p>
            </AccordionContent>
        </AccordionItem>
      </Accordion>
    
      ))}
    </div>
      
  )
}

export default FaqsCards


