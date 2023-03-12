import HomeComp from '@/components/modules/BusinessModules/DashBoard/Home'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function index() {
  return (
    <BusinessAccountLayout active={3}>
      <HomeComp/>
    </BusinessAccountLayout>
  )
}
