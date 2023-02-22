import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import React from 'react'

export default function Message() {
  return (
    <div className="text-center">
            <h4 className="text-center fw-bold mb-5">PIN Creatr</h4>
            <Spacer SpacerClassName='py-2'/>
            <div className="text-center mb-3">
              <FallbackImage
              src='/Images/Icon/success.svg'
              width={74}
              height={74}
              />
            </div>
            <p className="mb-5">You are secured</p>
            <ButtonComp
          btnStyle={{backgroundColor:'#1A1A1A'}}
          btnText={<h4 className="mb-0 fw-bold">Done</h4>}
          btnClassName='w-100 text-center  rounded text-white py-2'
          />
        </div>
  )
}
