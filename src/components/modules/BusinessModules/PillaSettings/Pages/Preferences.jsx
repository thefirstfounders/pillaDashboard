import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import Container from '@/components/Ui/Container'
import SwitchInput from '@/components/Ui/SwitchInput'
import React from 'react'

export default function Preferences({getTitleName,pageName}) {
  return (
    <Container   Wrapper={` border border-2 mb-4`}>
    <div className={`animate__animated animate__fadeIn`}>
       <div className="h3t  fw-normal grayII font-1 mb-3">{getTitleName||pageName}</div>

        <section className='mb-5'>
            <Container Wrapper={'border border-2 rounded1 mb-4'}>
            <div className='d-flex  justify-content-between'>
            <div className='blackII'>
            Email Notification
            </div>
            <div>
                <SwitchInput bgColor={'#1BCC00'} width={'35px'}/>
            </div>
            </div>
            </Container>
            <Container Wrapper={'border border-2 rounded1'}>
            <div className='d-flex  justify-content-between'>
            <div className='blackII'>
            SMS Notification
            </div>
            <div>
                <SwitchInput bgColor={'#1BCC00'} width={'35px'}/>
            </div>
            </div>
            </Container>
        </section>

        <section>
            <h5 className='mb-4 fw-normal font-2 grayII'>Transaction Fees</h5>

            <div className='d-flex gap-3 align-items-center mb-4'>
                <div>
                    <CheckTypeInput type='radio' name='type'/>
                </div>
                <div>
                    <div className='mb-1 blackI'>The Customer</div>
                    <div className='h5tt grayIV'>The transaction fees will be paid by the customer</div>
                </div>
            </div>

            <div className='d-flex gap-3 align-items-center mb-4'>
                <div>
                    <CheckTypeInput type='radio' size={'18px'} name='type'/>
                </div>
                <div>
                    <div className='mb-1 blackI'>I will pay it</div>
                    <div className='h5tt grayIV'>All transaction fees will be paid by the merchant.</div>
                </div>
            </div>
        </section>
       </div>
       </Container>
  )
}
