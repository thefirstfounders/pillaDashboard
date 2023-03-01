import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import MoneyInput from "@/components/Ui/MoneyInput";
import SelectInput from "@/components/Ui/SelectInput";
import TextInput from "@/components/Ui/TextInput";
import React, { useState } from "react";
import { HowFrequentButtonState, HowMuchData } from "../../Saving/Data";
import { HowLongData } from "../Data";

export default function ApplyForLoanForm({onNext}) {
  const [selectTime,setSelectTime] =useState()
  return (
    <section>
      <div className="mb-4">
        <h4 className="fw-bold">Apply for Loan</h4>
        <div className="h6tt gray">Getting a loan on the app takes just a few steps</div>
      </div>

      <form>
        <div className="mb-4">
        <SelectInput
        label={'What is the Loan for ?'}
        />
        </div>
        <div className="mb-4">
        <MoneyInput
        label={'How much do you need?'}
        />
        </div>
        <div className="mb-4">
      <div className="row g-3">
      <label className=' h6tt font-2' style={{color:' #333333',fontWeight:'500'}}>{'Chose repayment Period'}</label>
      {HowLongData()?.map(({name,action},i)=> 
         <div className='col-6 col-lg-4' key={i}>
         <ButtonComp
         onClick={()=>setSelectTime(name)}
         btnText={name}
         btnClassName='w-100 fw-semibold font-2 h5tt'
         btnStyle={{...HowFrequentButtonState[selectTime===name?0:1],padding:'10px 0',}}
         />
     </div>
        )}
      </div>
        </div>
       
        <div className='my-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Continue</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
      </form>
    </section>
  );
}
