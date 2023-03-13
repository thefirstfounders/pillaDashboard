import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import Container from '@/components/Ui/Container'
import React from 'react'

export default function SettlementAccount({getTitleName,pageName,onNext}) {
  return (
    <Container   Wrapper={` border mb-4 pb-3`}>
    <div className={`animate__animated animate__fadeIn`}>
      <div className='d-flex justify-content-between align-items-center mb-4'>
      <div className="h3t  fw-normal grayII font-1 ">{getTitleName||pageName}</div>
      <div>
      <ButtonComp
      onClick={onNext}
            btnText={<span className='d-flex gap-2 align-items-center'> <FallbackImage src='/Images/Icon/pluswhite.png' width={20} height={20}/>Add Account</span>}
            btnClassName='text-white primaryI px-4 py-2 font-1 h4t fw-bold'
            />
      </div>
      </div>
    <div className='py-2'></div>
      <Container Wrapper={'border'}>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
            <p className='grayIV mb-0'>GT Bank</p>
            <div className='fw-bold font-1 h4t black'>Seun Ogunyemi</div>
        </div>
        <div>
        <p className='grayIV mb-0'>Primary Account</p>
        </div>
        <div>
            <p className='danger mb-0'>Remove</p>
        </div>
      </div>
      </Container>
       </div>
       </Container>
  )
}
