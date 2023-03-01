import PillaFinance from '@/components/modules/PillaFinance'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function finance() {
  return (
    <UserLayout active={4}>
        <PillaFinance/>
    </UserLayout>
  )
}
