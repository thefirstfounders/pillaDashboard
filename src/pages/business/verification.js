import Verification from '@/components/modules/BusinessModules/Verification/Verification'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function verification() {
  return (
    <BusinessAccountLayout active={2}><Verification/></BusinessAccountLayout>
  )
}
