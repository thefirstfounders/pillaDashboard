import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'

export default function AddSettlementAccount() {
  return (
    <section>
        <OffCanvasHeader
        title={'Add Settlement Account'}
        />
        <div className='row g-3'>
            <TextInput
            label={'Bank Name'}
            required
            />
            <TextInput
            label={'Account Number'}
            required
            />
            <TextInput
            label={'Name on Account'}
            required
            />
            <div className='mt-4 h7 grayIV font-2'>
            To help us verify your account, the name on your bank account should match the name you provided as the owner of your business
            </div>

            <div className='d-flex gap-2 align-items-center'>
                <CheckTypeInput/> <span className='grayII h6tt mb-1 font-1'>Make this my primary bank account</span>
            </div>

            <div className='mt-5'>
                <ButtonComp
                btnText={<h4 className='mb-0'>Save</h4>}
                btnClassName='text-white w-100 py-2 font-1 fw-bold bg-garyI'
                />
            </div>
        </div>
    </section>
  )
}
