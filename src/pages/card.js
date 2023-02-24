import Pilla_Card from '@/components/modules/Card'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Card() {
  return (
    <UserLayout title='Pilla Card' active={2}>
        <Pilla_Card/>
    </UserLayout>
  )
}
