import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import TextInput from '@/components/Ui/TextInput'
import Layout from '@/Layout/Layout'
import Link from 'next/link'
import React from 'react'

export default function Personal() {
  return (
    <Layout title={'Personal Account'}>
        <section className='min-vh-100 ' style={{backgroundColor:'#F8F8F8'}}>
            <div className='row min-vh-100'>
                <div className='col-lg-6 col-xl-4 text-center d-none d-lg-inline-block position-relative' style={{backgroundColor:'#E5FFFC'}}>
               
                                    <div className='position-absolute bottom-0'>
                                    <FallbackImage
                        src='/Images/Auth/4.png'
                        width={578}
                        height={637}
                         layout='responsive'

                        />
                                        </div>
                </div>
                <div className='col-lg-6 col-xl-7'>
                    <div className='d-flex justify-content-center justify-content-lg-start h-100 flex-column  align-items-center'>
                    <div  className='col-10 col-lg-11 col-xl-9'>
                    <Spacer SpacerClassName='py-4'/>
                    <div>
                        <FallbackImage
                        src='/Images/Auth/Logo.png'
                        width={131}
                        height={40}
                        />
                    </div>
                    <Spacer SpacerClassName='py-3 py-lg-5'/>
                    <div>
                    <div className='col-lg-11 col-xl-10'>
                        <div className='d-flex justify-content-between align-items-center  mb-3'>
                            <h3 className='mb-0 fw-bold'>Personal Account</h3>
                            <div className='h6tt successII text-decoration-underline fw-1'>Switch to Business account</div>
                        </div>
                        <div>
                            <Container Wrapper={'bg-white py-3 px-3 border  border-2 rounded-4'}>
                                <div className='fw-bold font-1 mb-4 h3t'>Sign in</div>
                                <form className='row g-3'>
                                    <TextInput
                                  placeholder={'Email Address'}
                                  inputClassName='bg-white py-3 h3'
                                    />
                                   
                                     <TextInput
             placeholder={'Password'}
             inputClassName='bg-white  '

                type='password'
                />
                                    <div className='text-end grayII font-2'>Forget your password?</div>
                                    <div className='mt-5'>
                                    <ButtonComp btnText={<h4 className='mb-0 fw-bold font-1'>Proceed</h4>} btnClassName='w-100 text-center primaryI py-3 rounded-pill text-white'/>
                                    </div>
                                </form>
                            </Container>
                            <div className='text-center py-3 h5t gray font-1 noSelect'>Don’t have an account?  <Link href={'/register'} className='blackI hover'> Sign up</Link>  </div>

                        </div>
                    </div>
                    </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    </Layout>
  )
}
