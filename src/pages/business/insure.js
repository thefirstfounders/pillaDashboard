import PillInsure from '@/components/modules/BusinessModules/Insure/PillInsure'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function insure() {
  return (
    <BusinessAccountLayout active={7}>
        <PillInsure/>
    </BusinessAccountLayout>
  )
}
