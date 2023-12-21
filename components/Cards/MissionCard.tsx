import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function MissionCard({ icon, title, titleDdesc, desc }: { icon: React.ReactNode; title: string; titleDdesc?: string; desc: string; }) {
  return (
    <Card className='flex flex-col items-center justify-center text-center min-h-[200px] min-w-fit bg-[#fff] text-[#000] shadow-foreground/50 shadow-lg'>
      <CardHeader className='flex flex-col items-center justify-center'>
        {icon}
        <CardTitle className='font-extrabold '>{title}</CardTitle>
        <CardDescription className='text-gray-500 font-bold'>{titleDdesc}</CardDescription>
      </CardHeader>
      <CardContent className='font-light'>
        {desc}
      </CardContent>
    </Card>

  )
}

export default MissionCard