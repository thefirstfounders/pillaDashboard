import OffCanvasHeader from '@/components/Common/OffCanvasHeader'
import ButtonComp from '@/components/Ui/Button'
import TextInput from '@/components/Ui/TextInput'
import React from 'react'

export default function ChangePassword({onNext}) {
  return (
    <section>
        <OffCanvasHeader
        title={'Change Password'}
        />

        <section>
            <form>
               <div className='mb-4'>
               <TextInput
                label={'Current Password'}
                type='password'
                />
               </div>
               <div className='mb-4'>
               <TextInput
                label={'New Password'}
                type='password'
                />
               </div>
               <div className=''>
               <TextInput
                label={'Confirm Password'}
                type='password'
                />
               </div>
               <div className="mt-5">
          <ButtonComp
            onClick={onNext}
            btnText={<h4 className="mb-0">Save</h4>}
            btnStyle={{background:'#B3B3B3'}}
            btnClassName=" py-2 text-white w-100"
          />
        </div>
            </form>
        </section>
    </section>
  )
}
