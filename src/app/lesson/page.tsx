import LessonPlan from '@/components/LessonPlan'
import SDG_13_Mean from '@/components/SDG_13_Mean'
import Targets from '@/components/Targets'
import React from 'react'

export default function page() {
  return (
    <main className='lg:mt-20 space-y-20'>
      <SDG_13_Mean/>
      <Targets/>
      <LessonPlan/>
    </main>
  )
}
