import PillaCrypto from '@/components/modules/PillaCrypto'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function crypto() {
  return (
    <UserLayout active={6} pageName={'Cypto Wallet'}>
        <PillaCrypto/>
    </UserLayout>
  )
}
