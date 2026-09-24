import React from 'react'
import Hero from './components/sections/Hero'
import PremiumBenefits from './components/sections/PremiumBenefits'
import PremiumTvAds from './components/sections/PremiumTvAds'
import ComercialProcess from './components/sections/ComercialProcess'
import PrecisionTargeting from './components/sections/PrecisionTargeting'
import Comercials from './components/sections/Comercials'

const App = () => {
  return (
    <div>
      <Hero />
      <PremiumTvAds />
      <PremiumBenefits />
      <ComercialProcess />
      <PrecisionTargeting />
      <Comercials />
    </div>
  )
}

export default App