import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import MoneyInput from "@/components/Ui/MoneyInput";
import SelectInput from "@/components/Ui/SelectInput";
import TextInput from "@/components/Ui/TextInput";
import React, { useState } from "react";
import { HowFrequentButtonState, HowMuchData } from "../../Saving/Data";
import { HowLongData } from "../Data";

export default function PayRentMain({onNext}) {
  const [selectTime,setSelectTime] =useState()
  return (
    <section>
      <div className="mb-4">
        <h4 className="fw-bold">Pay Rent </h4>
        <div className="h6tt gray mb-4">Effortlessly Pay Rent to Your Landlord on Pilla</div>
        <div className="text-end"><h6 className="fw-1">Select Beneficiary</h6></div>
      </div>

      <form>
        <div className="mb-4">
        <TextInput
        label={'Account Number'}
        />
        </div>
        <div className="mb-4">
        <TextInput
        label={'Beneficiary Name'}
        />
        </div>
        
        <div className="mb-4">
        <MoneyInput
        label={'Enter Amount'}
        />
        </div>
        <div className="mb-4">
        <TextInput
        label={'Narration'}
        />
        </div>
        <div className="d-flex gap-2">
           <CheckTypeInput/> <div className="h5t blackI">Save as beneficiary</div> 
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
