import Header from '@/components/Common/AuthHeader'
import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import Container from '@/components/Ui/Container'
import Layout from '@/Layout/Layout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function Login() {
  const [getType,setType] =useState('');
  const router =useRouter()
  const handleSubmit = ()=>{
    if(getType)
    getType ==="Personal" ? router.push('/auth/login/personal') : router.push('/auth/login/business')
  }
  return (
    <Layout title={'Login'}>
      <Header/>
        <section className='d-flex align-items-center justify-content-center min-vh-100'>
          <div className='col-11 col-md-8 col-lg-5' >
          <h3 className='fw-bold mb-3'>Create a new Pilla account</h3>
          <Container Wrapper={'px-lg-4 border-0'} WrapperStyle={{backgroundColor:'#F8F8F8'}}>
            <Spacer SpacerClassName='py-3'/>
              <h4 className='fw-bold mb-4'>Select Account</h4>
              {/*  */}
              <div style={{border:'1px solid #E6E6E6'}} className={`${getType==="Personal" ? 'primaryI text-white':'bg-white blackI'}  ps-3 d-flex align-items-end align-items-lg-start justify-content-between rounded1 mb-3`}>
                <div className='d-flex gap-3 align-items-start  py-3'>
                <div className='pt-1'>
                  <CheckTypeInput borderColor={getType === "Personal"&&'#CCFFF9'} onChange={(e)=>setType(e.target.value)} checked={getType === "Personal"} name='type' value='Personal' type='radio'borderWidth={"3px"}/>
                </div>
                <div>
                  <div className='h4t fw-bold font-1 mb-2'>Personal Account</div>
                  <div className='h6tt  fw-1'>Pay your rents, save towards your dream real- <br className='d-none d-md-inline-block'/>estate project, awaken your real-estate dream <br className='d-none d-md-inline-block'/>with Pilla.
</div>
                </div>
                </div>
                <div className='pt-3'>
                  <FallbackImage
                  src={getType==="Personal"?'/Images/Auth/1a.png':'/Images/Auth/1.png'}
                  width={'137'}
                  height={120}
                  />
                </div>
              </div>
              {/*  */}
              <div style={{border:'1px solid #E6E6E6'}} className={`${getType==="Business" ? 'primaryI text-white':'bg-white blackI'}  ps-3 d-flex align-items-end align-items-lg-start justify-content-between rounded1 mb-4`}>
                <div className='d-flex gap-3 align-items-start  py-3'>
                <div className='pt-1'>
                  <CheckTypeInput borderColor={getType === "Business"&&'#CCFFF9'} onChange={(e)=>setType(e.target.value)} value='Business' name='type' type='radio'borderWidth={"3px"}/>
                </div>
                <div>
                  <div className='h4t fw-bold font-1 mb-2'>Business Account</div>
                  <div className='h6tt  fw-1'>Get paid by anyone, anytime and anywhere with <br className='d-none d-md-inline-block'/> a single integration.
</div>
                </div>
                </div>
                <div className='pt-3'>
                  <FallbackImage
                  src='/Images/Auth/2.png'
                  width={'137'}
                  height={120}
                  />
                </div>
              </div>

              {/*  */}
              <div>
                <ButtonComp onClick={handleSubmit} btnText={<h4 className='mb-0 fw-bold font-1'>Proceed</h4>} btnClassName='w-100 text-center bg-garyI py-3 rounded-pill text-white'/>
              </div>
              <Spacer SpacerClassName='py-2'/>
          </Container>
          </div>
        
        </section>
    </Layout>
  )
}
