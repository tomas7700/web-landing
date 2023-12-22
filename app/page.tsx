
import Benefits from '@/components/Benefits'
import Brands from '@/components/Brands'
import Development from '@/components/Development'
import Faqs from '@/components/Faqs'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Ideal from '@/components/Ideal'
import Info from '@/components/Info'
import Mission from '@/components/Misssion'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Works from '@/components/Works'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Web Wizzardly | digital marketing agency as a subscription',
  description: 'Discover Web Wizzardly Basic Subscription, your go-to digital marketing agency, offering web development, marketing, and design at a fixed monthly cost',
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brands/>
      <Mission/>
      <Ideal/>
     < Info/>
     < Development/>
    < Benefits/>
     < Pricing/>
     < Faqs/>

    </>




  )
}
