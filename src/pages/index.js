
//import { Inter } from '@next/font/google'

import HomeComp from '@/components/modules/Home/Home'
import UserLayout from '@/Layout/UserLayout'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <UserLayout title='Home' active={1} pageName={`Home`}>
        <HomeComp/>
    </UserLayout>
  )
}
