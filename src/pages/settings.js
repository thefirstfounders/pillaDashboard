import PillaSettings from '@/components/modules/PillaSettings'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Settings() {
  return (
    <UserLayout active={7} pageName={`Settings`}>
        <PillaSettings/>
    </UserLayout>
  )
}
