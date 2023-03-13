import Banner from '@/components/modules/Saving/Banner'
import Home from '@/components/modules/BusinessModules/Saving/Index'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Savings() {
  return (
    <BusinessAccountLayout active={6} pageName={`Pilla Savings`}>
    <Home/>
    </BusinessAccountLayout>
  )
}
