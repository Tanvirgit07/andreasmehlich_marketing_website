import React from 'react'
import AIDashboardOverview from './_components/AIDashboardOverview'
import RealTimeMonitoring from './_components/RealTimeMonitoring'
import RealTimeInsights from './_components/RealTimeInsights'
import PowerfulModules from './_components/PowerfulModules'
import CalendarInbox from './_components/CalendarInbox'
import AllInOneEcosystem from '../_components/AllInOneEcosystem'
import FAQ from '../_components/FAQ'
import CTA from '../_components/CTA'

function page() {
  return (
    <div>
      <AIDashboardOverview />
      <RealTimeMonitoring />
      <RealTimeInsights />
      <PowerfulModules />
      <CalendarInbox />
      <AllInOneEcosystem />
      <FAQ />
      <CTA />
    </div>
  )
}

export default page
