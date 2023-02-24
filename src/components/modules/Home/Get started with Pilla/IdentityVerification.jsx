import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import React, { useState } from "react";
import { IdentityVerificationData } from "../Data";
import Box from "./Identity Verification/Box";

export default function IdentityVerification({onNext}) {
  const [defaultSave, setDefaultSave] = useState();
  return (
    <section>
      <section className="mb-5">
        <h4 className="fw-bold">Identity Verification </h4>
        <div className="font-2">
          Upload ID to complete identity verification
        </div>
      </section>

      <section>
        <p className="fw-1 mb-3 font-2">Choose verification method</p>
        {IdentityVerificationData(setDefaultSave)?.map(
          ({ name, action }, i) => (
            <Box selectName={defaultSave} key={i} name={name} action={action} />
          )
        )}
         <div className='mt-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Procced</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
      </section>
    </section>
  );
}
