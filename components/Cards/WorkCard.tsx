import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WorkCard({desc}:{desc:string}) {
  return (
    <div className="flex items-center justify-center ">
    <div className="flex flex-col bg-white font-semibold text-center rounded-3xl border shadow-lg p-3 max-w-xs cursor-pointer hover:shadow-2xl min-w-[300px] min-h-[400px]">
     <Link href='https://harsh-landing.vercel.app/'>
     <Image className="mb-3 w-full   rounded-xl shadow-lg mx-auto"  width={100} height={100} src="/work1.png" alt="product designer"/>
     </Link>
      <p className="text-xs text-gray-400 mt-4"> {desc} </p>
    </div>
  </div>
  )
}

export default WorkCard