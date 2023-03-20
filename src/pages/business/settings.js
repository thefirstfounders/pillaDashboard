import PillaSettings from '@/components/modules/BusinessModules/PillaSettings'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Settings() {
  return (
    <BusinessAccountLayout active={11} pageName={`Settings`}>
        <PillaSettings/>
    </BusinessAccountLayout>
  )
}
