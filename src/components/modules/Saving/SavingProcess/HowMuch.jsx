import ButtonComp from '@/components/Ui/Button'
import React, { useState } from 'react'
import { HowFrequentButtonState, HowFrequentData, HowMuchData } from '../Data'

export default function HowMuch({onNext}) {
    const [selectTime,setSelectTime] =useState()
  return (
    <div>
    <div className='mb-5'>
    <h4 className='fw-bold mb-5'>How much will you like to start with?</h4>
    </div>
    <div className='row gy-3'>
        {HowMuchData()?.map(({name,action},i)=> 
         <div className='col-6 col-lg-4' key={i}>
         <ButtonComp
         onClick={()=>setSelectTime(name)}
         btnText={name}
         btnClassName='w-100 fw-semibold h5tt'
         btnStyle={{...HowFrequentButtonState[selectTime===name?0:1],padding:'10px 0',}}
         />
     </div>
        )}
       
       <div className='mt-5'>
        <ButtonComp
         onClick={onNext}
        btnText={<h4 className='mb-0'>Continue</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
    </div>
</div>
  )
}
