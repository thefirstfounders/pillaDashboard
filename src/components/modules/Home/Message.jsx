import FallbackImage from '@/components/Common/ImageWrapper'
import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import React from 'react'

export default function Message({title='PIN Creatr',desc='You are secured',btnBG='#1A1A1A',onNext}) {
  return (
    <div className="text-center">
            <h4 className="text-center fw-bold mb-5">{title}</h4>
            <Spacer SpacerClassName='py-2'/>
            <div className="text-center mb-3">
              <FallbackImage
              src='/Images/Icon/success.svg'
              width={74}
              height={74}
              />
            </div>
            <p className="mb-5">{desc}</p>
            <ButtonComp
            onClick={typeof onNext ==="function" && onNext}
          btnStyle={{backgroundColor:btnBG}}
          btnText={<h4 className="mb-0 fw-bold">Done</h4>}
          btnClassName='w-100 text-center  rounded text-white py-2'
          />
        </div>
  )
}
