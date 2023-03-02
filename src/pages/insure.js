import PillaInsure from '@/components/modules/PillaInsure'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function insure() {
  return (
    <UserLayout active={5} pageName='Insurance'>
        <PillaInsure/>
    </UserLayout>
  )
}
