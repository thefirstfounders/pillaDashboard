import Spacer from "@/components/Common/Spacer";
import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import React from "react";

export default function Review({ onNext }) {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between py-3 py-lg-4   borderColorI h5tt">
        <div className="grayI ">Interest rate</div>
        <div className="font-4 fw-semibold">9% p.a</div>
      </div>

      <div className="d-flex justify-content-between py-3 py-lg-4   borderColorI h5tt">
        <div className="grayI h5tt">Maturity date</div>
        <div className="font-4 fw-semibold h5tt">March 26, 2023</div>
      </div>
      <div className="d-flex justify-content-between py-3 py-lg-4  mb-3 borderColorI h5tt">
        <div className="grayI">Estimated amount</div>
        <div className="font-4 fw-semibold primary">₦ 240,000.00</div>
      </div>

      <p className="grayI font-2 mb-5">
        This estimate assumes you save ₦ 20,00 for a year between today and your
        maturity date
      </p>
      <div className="h6tt grayI d-flex align-items-start">
        <CheckTypeInput size={"25px"} CheckTypeInputClassName={"me-2"} />I
        authorize automatic deduction of my savings on the due date from my
        designated account or card.
      </div>
      <div className="mt-5">
        <ButtonComp
          onClick={onNext}
          btnText={<h4 className="mb-0">Pay Now</h4>}
          btnClassName="bg-garyI py-2 text-white w-100"
        />
      </div>
      <Spacer SpacerClassName='my-4'/>
    </div>
  );
}
