import FallbackImage from "@/components/Common/ImageWrapper";
import PageSwitch from "@/components/Common/PageSwitch";
import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import React, { useState } from "react";
import Message from "../../Home/Message";
import Progress from "../../Saving/Progress";
import CheckCreditMain from "../CheckCredit/CheckCreditMain";
import LinkSalaryBankAccount from "../CheckCredit/LinkSalaryBankAccount";

export default function LoanDetails({ onNext }) {
  return (
    <section>
      <div className="mb-4">
        <h4 className="fw-bold">Loan Details</h4>
        <div className="h6tt gray">
          Getting a loan on the app takes just a few steps
        </div>
      </div>

      <div className="mb-4">
      <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Loan Amount</div>
          <div className="font-4 fw-semibold">₦ 0.00</div>
        </div>
      <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Interest rate @ 10% </div>
          <div className="font-4 fw-semibold">₦ 0.00</div>
        </div>
      <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Chargers</div>
          <div className="font-4 fw-semibold">₦ 0.00</div>
        </div>
      <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Total</div>
          <div className="font-4 fw-semibold">₦ 0.00</div>
        </div>
      <div className="d-flex justify-content-between py-3 py-lg-3   borderColorI h5tt">
          <div className="grayI ">Monthly Payment</div>
          <div className="font-4 fw-semibold">₦ 0.00</div>
        </div>
      </div>

      <div className="d-flex gap-2">
        <CheckTypeInput />{" "}
        <div className="h6tt grayIV">
        Approve the automatic deduction of loan repayment from your salary bank account on the due date.
        </div>
      </div>
      <div className="my-5">
        <ButtonComp
          onClick={onNext}
          btnText={<h4 className="mb-0">Submit Application </h4>}
          btnClassName="primaryI py-2 text-white w-100"
        />
      </div>
    </section>
  );
}
