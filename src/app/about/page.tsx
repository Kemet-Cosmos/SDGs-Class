import OverView from '@/components/OverView'
import React from 'react'
import SDG_17 from "@/components/SDG_17"
import ClimateInfo from '@/components/ClimateInfo'
 
export default function Page() {
  return (
    <main className='lg:mt-20 space-y-20'>
      <OverView/>
      <SDG_17/>
      <ClimateInfo/>
    </main>
  )
}
