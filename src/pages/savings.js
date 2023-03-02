import Banner from '@/components/modules/Saving/Banner'
import Home from '@/components/modules/Saving/Index'
import UserLayout from '@/Layout/UserLayout'
import React from 'react'

export default function Savings() {
  return (
    <UserLayout active={3} pageName={`Pilla Savings`}>
    <Home/>
    </UserLayout>
  )
}
