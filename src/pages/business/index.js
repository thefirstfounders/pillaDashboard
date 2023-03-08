import Home from '@/components/modules/BusinessModules/Home/Home'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function index() {
  return (
    <BusinessAccountLayout active={1}>
      <Home/>
    </BusinessAccountLayout>
  )
}
