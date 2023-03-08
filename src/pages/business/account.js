import Account from '@/components/modules/BusinessModules/Account/Account'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import React from 'react'

export default function account() {
  return (
    <BusinessAccountLayout active={4}>
        <Account/>
    </BusinessAccountLayout>
  )
}
