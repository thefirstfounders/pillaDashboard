import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import MoneyInput from "@/components/Ui/MoneyInput";
import SelectInput from "@/components/Ui/SelectInput";
import TextInput from "@/components/Ui/TextInput";
import React from "react";

export default function CheckCreditMain({onNext}) {
  return (
    <section>
      <div className="mb-4">
        <h4 className="fw-bold">Work Information</h4>
        <div className="h6tt gray">Enter Employee Information</div>
      </div>

      <form>
        <div className="mb-4">
        <TextInput
        label={'Enter Employer Name'}
        />
        </div>
        <div className="mb-4">
        <MoneyInput
        label={'Monthly Salary Amount'}
        />
        </div>
        <div className="mb-4">
        <SelectInput
        label={'Do you have work email address?'}
        />
        </div>
        <div className="d-flex gap-2">
           <CheckTypeInput/> <div className="h7 grayIV">I agree to the terms and conditions outlined in the Credit application and understand that my acceptance of these terms is a binding agreement. I affirm that the information provided in this application is true and accurate to the best of my knowledge.</div> 
        </div>

        <div className='my-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Proceed</h4>}
        btnClassName='bg-garyI py-2 text-white w-100'
        />
    </div>
      </form>
    </section>
  );
}
