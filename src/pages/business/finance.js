import PillaFinance from '@/components/modules/BusinessModules/PillaFinance'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function finance() {
  return (
    <BusinessAccountLayout active={9} pageName={`Pilla Finance`}>
        <PillaFinance/>
    </BusinessAccountLayout>
  )
}
