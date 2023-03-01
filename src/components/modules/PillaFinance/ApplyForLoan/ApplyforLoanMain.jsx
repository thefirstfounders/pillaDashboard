import FallbackImage from "@/components/Common/ImageWrapper";
import PageSwitch from "@/components/Common/PageSwitch";
import ButtonComp from "@/components/Ui/Button";
import React, { useState } from "react";
import Message from "../../Home/Message";
import Progress from "../../Saving/Progress";
import CheckCreditMain from "../CheckCredit/CheckCreditMain";
import LinkSalaryBankAccount from "../CheckCredit/LinkSalaryBankAccount";

export default function ApplyForLoanMain({onNext}) {


  return (
    <section>
      
      <div className="mb-4">
        <h4 className="fw-bold">Apply for Loan</h4>
        <div className="h6tt gray">Getting a loan on the app takes just a few steps</div>
      </div>

      <div className="text-center mb-4">
        <FallbackImage
        src={'/Images/Finance/applyloan1.png'}
        width={126}
        height={105}
        />
      </div>

      <div className="h5t blackI font-2 text-center">{`Your credit limit has not yet been approved. Please click on "Check Credit" below to view your current status.`}</div>

      <div className='my-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Check Credit Limit</h4>}
        btnClassName='primaryI py-2 text-white w-100'
        />
    </div>
    </section>
  );
}
