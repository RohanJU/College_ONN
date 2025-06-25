import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import SucessStats from '@/components/home/SucessStats'
import CollegeSearchSection from '@/components/home/CollegeSearchSection'
import CareerPathsSection from '@/components/home/CareerPathsSection'
import LatestNews from '@/components/home/LatestNews'

export default function page() {
  return (
<>
  <HeroSection/>
  <SucessStats/>
  <CollegeSearchSection/>
  <CareerPathsSection/>
  <LatestNews/>
</>
  )
}
