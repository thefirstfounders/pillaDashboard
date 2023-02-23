import OtpComp from '@/components/Common/OptCodeComp'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import React from 'react'

export default function VerificationStatus({title,desc,otpData,setOpt,onNext,btnText}) {
  return (
    <div>
          <div className="mb-4">
            <h4 className="fw-bold">{title}</h4>
            {desc &&<div className="h6tt gray font-3">{desc}</div>}
          </div>
          <Spacer SpacerClassName='py-1' />
          <OtpComp otpData={otpData} setOtp={setOpt}/>
          <Spacer SpacerClassName='py-4' />
          <ButtonComp
          onClick={onNext}
          btnText={<h4 className="mb-0 fw-bold">{btnText||'Proceed'}</h4>}
          btnClassName='w-100 text-center primaryI rounded text-white py-2'
          />
        </div>
  )
}
