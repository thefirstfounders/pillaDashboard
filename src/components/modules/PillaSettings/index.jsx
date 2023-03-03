import FallbackImage from '@/components/Common/ImageWrapper'
import PageSwitch from '@/components/Common/PageSwitch'
import Spacer from '@/components/Common/Spacer'
import Container from '@/components/Ui/Container'
import React, { useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { BsChevronRight } from 'react-icons/bs'
import { HiChevronLeft, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { SettingData } from './Data'
import ShowDetails from './Personalnfo/ShowDetails'

export default function PillaSettings() {
    const [pageName,setPageName] =useState('Personal information')

    const usePage =[
        {
            name:'Personal information',
            component:<div>
                
                <div className='mb-5'>
                    <FallbackImage
                    src='/Images/Setting/icon.png'
                    defaultImage='/Images/Setting/icon.png'
                    width={64}
                    height={64}
                    />
                </div>
                <section className='px-2 px-md-3'>
                <ShowDetails label={'First Name'} name={'Seun'}/>
                <ShowDetails label={'Last Name'} name={'Ogunyemi'}/>
                <ShowDetails label={'Email Address'} name={'Seunogunyemi@gmail.com'}/>
                <ShowDetails label={'Phone Number'} name={'08133561111'}/>
                <ShowDetails label={'Address'} name={'Lorem ipsum dolor sit amet consectetur. Q'}/>
                <ShowDetails label={'City / Town'} name={'Lorem ipsum'}/>
                <ShowDetails label={'Local Govern.'} name={'Lorem ipsum'}/>
                <ShowDetails label={'State'} name={'Lorem ipsum'}/>
               <Spacer ReUsableStyle={{height:'5vh'}} />
                       
                </section>
                
            </div>
        }
    ]

  return (
    <section>
           <div className='d-none d-lg-inline-block w-100'>
           <div className='row'>
                <div className='col-4'>
                    <Container Wrapper={'h-100'}>
                        {SettingData()?.map(({name,action},i)=>
                         <div className={`d-flex justify-content-between font-2 align-items-center pt-3 pb-4 ps-4 ${i!==5 &&' border-bottom'}`} key={i}>
                         <div className={`h3t ${pageName===name &&'success'}`}>{name}</div>
                         <div className='pointer'><BiChevronRight size={25} onClick={()=>setPageName(name)}/></div>
                         </div>
                        )}
                      
                    </Container>
                </div>
                <div className='col-8 '>
                <Container Wrapper={'h-100'}>
                <Spacer SpacerClassName='py-2'/>
                <div className='h4t fw-bold blackIV font-1 mb-5'>{pageName}</div>
                        <PageSwitch
                            pageArray={usePage}
                            pageName={pageName}
                        />
                    </Container>
                </div>
            </div>
           </div>

           <div className=' d-lg-none w-100'>
           <div className='row'>
            {!pageName ? <div className='col-12'>
                    <Container Wrapper={'h-100'}>
                        {SettingData()?.map(({name,action},i)=>
                         <div className={`d-flex justify-content-between font-2 align-items-center pt-3 pb-4 ps-4 ${i!==5 &&' border-bottom'}`} key={i}>
                         <div className={`h3t ${pageName===name &&'success'}`}>{name}</div>
                         <div className='pointer'><BiChevronRight size={25} onClick={()=>setPageName(name)}/></div>
                         </div>
                        )}
                      
                    </Container>
                </div> :
                 <div className='col-12 '>
                 <Container Wrapper={'h-100'}>
                 <Spacer SpacerClassName='py-2'/>
                 <div className='h4t fw-bold blackIV d-flex align-items-center gap-2 font-1 mb-5'>
                     <span className='mb-1'><HiChevronLeft onClick={()=>setPageName('')}/></span>
                     {pageName}</div>
                         <PageSwitch
                             pageArray={usePage}
                             pageName={pageName}
                         />
                     </Container>
                 </div>
                
                }
                
               
            </div>
           </div>
        </section>
  )
}
