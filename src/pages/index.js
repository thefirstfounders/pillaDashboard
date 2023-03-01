
//import { Inter } from '@next/font/google'

import UserLayout from '@/Layout/UserLayout'
import HomeComp from '@/components/modules/Home/Home'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <UserLayout title='Home' active={1}>
        <HomeComp/>
    </UserLayout>
  )
}
