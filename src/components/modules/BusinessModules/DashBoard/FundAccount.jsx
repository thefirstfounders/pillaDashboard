import FallbackImage from '@/components/Common/ImageWrapper'
import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import Container from '@/components/Ui/Container'
import MoneyInput from '@/components/Ui/MoneyInput'
import React from 'react'
import styled from 'styled-components'

export default function FundAccount() {
  return (
    <FundAccountStyle>
        <OffCanvasHeader
        title={'Fund Pilla Account'}
        />
        <div>
            <p className='blackI'>Make transfer to</p>
            <div className=' '>
            <Container Wrapper={'overlay border py-2 mb-4'} WrapperStyle={{borderColor:'#E6E6E6'}}>
                <h1 className='fw-bold font-3'>43321456898</h1>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='h3t blackI'>Pilla Bank</div>
                    <div className='h5tt  rounded1' style={{border:'1px dashed #000',padding:'5px 10px'}}>Copy</div>
                </div>
            </Container>

            <Container Wrapper={' border '} WrapperStyle={{borderColor:'#E6E6E6'}}>
               <p>Fund Via bank Card</p>
               <div className='mb-4'>
                <MoneyInput
                label={'Enter Amount'}
                />
               </div>
               <div className='mb-4'>
               <p>Payment methods</p>
               <Container Wrapper={'border rounded mb-3'}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div  className='d-flex gap-1 align-items-center'>
                        <div>
                            <FallbackImage
                            src='/Images/Icon/card.png'
                            width={20}
                            height={20}
                            />
                        </div>
                        <div>
                            <div className='h6tt blackI'>Gt Bank (Card)</div>
                            <div className='h7  primaryIII'>452739*****6245 Change</div>
                        </div>
                    </div>
                    <div>
                        <CheckTypeInput type='radio' name='payment'/>
                    </div>
                </div>
               </Container>
               <Container Wrapper={'border rounded mb-3'}>
                <div className='d-flex justify-content-between align-items-center'>
                    <div  className='d-flex gap-1 align-items-center'>
                        <div>
                            <FallbackImage
                            src='/Images/Icon/card.png'
                            width={20}
                            height={20}
                            />
                        </div>
                        <div>
                            <div className='h6tt blackI mt-1'>Add Bank Card</div>
                    
                        </div>
                    </div>
                    <div>
                        <CheckTypeInput type='radio' name='payment'/>
                    </div>
                </div>
               </Container>
               </div>
            </Container>

            <ButtonComp
        //   onClick={onNext}
          btnText={<h4 className="mb-0 fw-bold">{'Proceed'}</h4>}
          btnClassName='w-100 text-center primaryI rounded text-white py-2'
          />
            </div>
        </div>
    </FundAccountStyle>
  )
}


const FundAccountStyle = styled.section`
.overlay{

}
`