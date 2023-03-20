import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import CheckTypeInput from '@/components/Ui/CheckTypeInput'
import MoneyInput from '@/components/Ui/MoneyInput'
import TextArea from '@/components/Ui/TextArea'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'

export default function PaymentDetails({onNext}) {
  return (
    <section className='pb-4'>
        <OffCanvasHeader
            title={'Payment Details'}
            desc={"Tell us about this payment link you're creating"}
            decClassName='gray h6tt'
        />
        <section className='row gy-4'>
            <div>
                <TextInput
                label={'Customer Name'}
                required
                inputClassName={'bg-grayIII'}
                placeholder={'Enter full name'}
                />
            </div>
            <div>
                <TextArea
                label={'Payment Description'}
                inputClassName={'bg-grayIII'}
                placeholder={'Add description (optional)'}
                />
            </div>
            <div>
                <MoneyInput
                label={'Amount'}
                inputClassName={'bg-grayIII'}
                placeholder={'Add description (optional)'}
                required
                />
            </div>
            <div>
                <div className='mb-2'>
                <TextInput
                label={'Customer Contact'}
                inputClassName={'bg-grayIII'}
                placeholder={'email address'}
                required
                />
                </div>
                  <TextInput
                
                inputClassName={'bg-grayIII'}
                placeholder={'+234'}
                required
                />
            </div>
            <div>
                <div className='h6t mb-4 fw-semibold '>Transaction Fees</div>
                {/*  */}

                <div>
                    <div className='d-flex align-items-center gap-3 mb-3'>
                        <CheckTypeInput type='radio'/>
                        <div className='font-2'>
                            <div className='h6tt blackI'>The Customer</div>
                            <div className='h6tt grayIV'>The transaction fees will be paid by the customer</div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='d-flex align-items-center gap-3 mb-3'>
                        <CheckTypeInput type='radio'/>
                        <div className='font-2'>
                            <div className='h6tt blackI'>I will pay it</div>
                            <div className='h6tt grayIV'>All transaction fees will be paid by the merchant.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
        <ButtonComp
         onClick={onNext}
        btnText={<h4 className='mb-0'>Create Link</h4>}
        btnClassName='bg-garyI py-2 text-white w-100'
        />
    </div>
        </section>
    </section>
  )
}
