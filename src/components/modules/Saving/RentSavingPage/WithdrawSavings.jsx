import FallbackImage from '@/components/Common/ImageWrapper'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import MoneyInput from '@/components/Ui/MoneyInput'
import React from 'react'

export default function WithdrawSavings({onNext}) {
  return (
    <div>
        <div className='mb-4'>
        <h5 className='fw-bold'>Withdraw Savings </h5>
        <p>Input amount you want to withdraw</p>
        </div>

        <div className='mb-4'>
            <MoneyInput label={'Enter Amount'}/>
        </div>
        <div>
          <p className='mb-2'>Payment to</p>
        <div style={{padding:'13px 0'}} className="borderGeneral d-flex justify-content-between  px-3 mb-4">
            <div className="h6tt d-flex align-items-center blackI fw-1"> 
            <FallbackImage
            src='/Images/Icon/wallet.png'
            width={20}
            height={20}
            className='me-2'
            />
            Account Balance (₦ 400,500.00)</div>
            <div>
                <CheckTypeInput name={'bank'} size={'18px'} type="radio"/>
            </div>
        </div>
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
