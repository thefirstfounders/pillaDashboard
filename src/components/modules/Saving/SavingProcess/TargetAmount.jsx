import Spacer from '@/components/Common/Spacer'
import ButtonComp from '@/components/Ui/Button'
import MoneyInput from '@/components/Ui/MoneyInput'
import React from 'react'

export default function TargetAmount({onNext}) {
  return (
    <div className=''>
                <h4 className='fw-bold mb-5'>How much is your saving target?</h4>
                <div className='mb-4'>
                <MoneyInput/>
                </div>
                <Spacer SpacerClassName='py-1'/>
                <div>
                    <ButtonComp
                    onClick={onNext}
                    btnText={<h4 className='mb-0'>Continue</h4>}
                    btnClassName='primaryI py-2 text-white w-100'
                    />
                </div>
            </div>
  )
}
