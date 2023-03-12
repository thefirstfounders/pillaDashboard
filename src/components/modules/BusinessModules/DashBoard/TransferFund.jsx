import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import MoneyInput from '@/components/Ui/MoneyInput'
import SelectInput from '@/components/Ui/SelectInput'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'

export default function TransferFund() {
  return (
    <section>
        <OffCanvasHeader
            title={'Transfer'}
        />
        <p className='text-end blackI font-3 fw-1'>Select Beneficiary</p>

       <div className='row g-4'>
       <div className='col-12'>
            <SelectInput label={'Select Bank'} placeholder='search'/>
        </div>
       <div className='col-12'>
            <TextInput label={'Account Number'} placeholder='00'/>
        </div>
       <div className='col-12'>
            <TextInput label={'Beneficiary Name'} placeholder='00'/>
        </div>
       <div className='col-12'>
            <MoneyInput label={'Enter Amount'} placeholder='00'/>
        </div>
        <div className='col-12'>
            <TextInput label={'Narration'} placeholder='00'/>
        </div>
        <div className='col-12 d-flex align-items-center blackI gap-2'>
            <CheckTypeInput size={'18px'} /> <span className='mb-1'>Save as beneficiary</span>
        </div>
       </div>
       <div className='mt-4'> <ButtonComp
        //   onClick={onNext}
          btnText={<h4 className="mb-0 fw-bold">{'Proceed'}</h4>}
          btnClassName='w-100 text-center primaryI rounded text-white py-2'
          /></div>
       
    </section>
  )
}
