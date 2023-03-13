import Pilla_Card from '@/components/modules/BusinessModules/Card'
import BusinessAccountLayout from '@/Layout/BusinessAccountLayout'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Card() {
  return (
    <BusinessAccountLayout title='Pilla Card' active={5} pageName={`Pilla Card`}>
        <Pilla_Card/>
    </BusinessAccountLayout>
  )
}
