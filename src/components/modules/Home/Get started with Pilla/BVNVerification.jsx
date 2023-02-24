import ButtonComp from "@/components/Ui/Button";
import DatePicker from "@/components/Ui/DatePicker";
import SelectInput from "@/components/Ui/SelectInput";
import TextInput from "@/components/Ui/TextInput";
import React from "react";

export default function BVNVerification({onNext}) {
  return (
    <section>
      {" "}
      <section className="mb-5">
        <h4 className="fw-bold">BVN Verification </h4>
        <div className="font-2">Enter BVN to complete BVN verification</div>
      </section>
      <section>
        <div className="mb-4">
            <TextInput label={'Bank Verification Number'}
            placeholder='Enter BVN'
            />
        </div>
        <div className="mb-4">
            <SelectInput label={'Gender'}
            options={[{label:'Male',value:'Male'},{label:'Female',value:'Female'}]}
            placeholder='Select Gender'
            />
        </div>
        <div className="mb-4">
            <DatePicker label={'Date Of Birth'}
            placeholder='DOB'
            />
        </div>
        <div className='mt-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Verify</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
      </section>
    </section>
  );
}
