import React from 'react'
import RestaurantsHero from './_components/RestaurantsHero'
import RestaurantFullBooked from './_components/RestaurantFullBooked'
import ButyFeaturesBarber from '../beauty-salons/_components/ButyFeaturesBarber'
import YourIndustry from '../barbershops/_components/YourIndustry'
import HowItWorks from '../barbershops/_components/HowItWorks'
import HowUserKora from '../barbershops/_components/HowUserKora'
import FAQ from '../_components/FAQ'
import CTA from '../_components/CTA'

function page() {
  return (
    <div>
      <RestaurantsHero />
      <RestaurantFullBooked />
      <ButyFeaturesBarber />
      <YourIndustry />
      <HowItWorks />
      <HowUserKora />
      <FAQ />
      <CTA />
    </div>
  )
}

export default page
