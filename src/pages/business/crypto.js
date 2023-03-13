import PillaCard from '@/components/modules/BusinessModules/Crypto'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function card() {
  return (
    <BusinessAccountLayout active={8}>
        <PillaCard/>
    </BusinessAccountLayout>
  )
}
