import { SideBarBusinessData } from '@/utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import FallbackImage from '../Common/ImageWrapper'
import Spacer from '../Common/Spacer'

export default function BusinessSideBar({active=1}) {
const router =useRouter()
   
    
  return (
    <section className='px-4'>
        <Spacer ReUsableStyle={{height:'30px'}} />
        {/*  */}
        <div >
            <div className='d-flex justify-content-center gap-2 border-bottom pb-3'>
                <div className='rounded-circle h5t bg-grayV d-flex align-items-center justify-content-center' style={{width:'36px',height:'36px'}}>P</div>
                <div>
                    <div className='h6tt blackI fw-1 font-2'>Peter Simon</div>
                    <div className='h7 grayIV'>1122334455</div>
                    <Spacer SpacerClassName='py-1'/>
                </div>
                
            </div>
          
        </div>
        {/*  */}
        <div className=' border-bottom pb-2'>
        <Spacer ReUsableStyle={{height:'40px'}} />

        {/* <div className='d-flex ps-3 align-items-center gap-2 primaryII py-2 mb-2'>
                <FallbackImage
                src={'/Images/SideBar/gettingStarted.png'}
                width={20}
                height={20}
                />
                <div className='h5t grayII font-3'>Get Started</div>
            </div> */}
            {SideBarBusinessData?.slice(0,2)?.map(({ name, icon1, icon2, activeNo,path },i)=>
            <Link href={path} key={i} className='text-decoration-none'>
            <div className={`d-flex ps-3 align-items-center gap-2  py-2 mb-3 ${active === activeNo && 'primaryII'}`}>
                <FallbackImage
                src={ active === activeNo?icon1:icon2}
                width={20}
                height={20}
                />
                <div className={`h5t  font-3 ${active === activeNo ?'successII':'grayII'}`}>{name}</div>
            </div></Link>
            )}
        </div>
        {/*  */}
        {/*  */}
        
        <div>
        <Spacer ReUsableStyle={{height:'40px'}} />
        {SideBarBusinessData?.slice(2,SideBarBusinessData?.length)?.map(({ name, icon1, icon2, activeNo,path },i)=>
          <Link href={path} key={i} className='text-decoration-none'>
        <div className={`d-flex ps-3 align-items-center gap-3 py-2 ${active === activeNo && 'primaryII'}`} style={{marginBottom:'15px'}} key={i} >
                <FallbackImage
               src={ active === activeNo?icon1:icon2}
               width={22}
               height={22}
               objectFit='contain'
                />
                <div  className={`h5t grayII font-3 ${active === activeNo?'successII':''} `}>{name}</div>
              
            </div>  </Link>)}

            <Spacer ReUsableStyle={{ height: "10vh" }} />

        </div>
        {/*  */}
    </section>
  )
}
