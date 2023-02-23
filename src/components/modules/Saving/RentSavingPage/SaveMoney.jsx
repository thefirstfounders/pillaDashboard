import ButtonComp from '@/components/Ui/Button'
import MoneyInput from '@/components/Ui/MoneyInput'
import React from 'react'

export default function SaveMoney({onNext}) {
  return (
    <div>
        <div className='mb-4'>
        <h5 className='fw-bold'>Save Money</h5>
        <p>Enter, how much you want to save. </p>
        </div>

        <div>
            <MoneyInput label={'Enter Amount'}/>
        </div>
        <div className='mt-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Proceed</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
    </div>
  )
}
