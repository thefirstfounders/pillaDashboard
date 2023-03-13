import FallbackImage from "@/components/Common/ImageWrapper";
import ButtonComp from "@/components/Ui/Button";
import CheckTypeInput from "@/components/Ui/CheckTypeInput";
import React from "react";
import { VirtualNairaData } from "../Data";

export default function NairaCard() {
  return (
    <div className="mb-5">
      <div className="mb-4">
        {VirtualNairaData()?.map(({ name, action }, i) => (
          <div
            className="d-flex gap-5 py-3 py-lg-3 px-4 align-items-center  borderColorI h5tt"
            key={i}
          >
            <div className="grayI ">
              <FallbackImage
                src="/Images/Icon/markSuccess.svg"
                width={32}
                height={32}
              />
            </div>
            <div className="font-4 fw-semibold grayI">{name}</div>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <p className="font-2 grayI text-center">
          This estimate assumes you save ₦ 20,00 for a year between today and
          your maturity date
        </p>
      </div>
      <div className="d-flex gap-3 justify-content-center align-items-center mb-4">
        <h3 style={{ color: "#00332D" }} className="mb-0 fw-bold">
          ₦1,000.00
        </h3>{" "}
        <p className="mb-0 grayI">creation fee</p>
      </div>
      <div className="d-flex gap-1 justify-content-center align-items-center mb-3">
        <CheckTypeInput />{" "}
        <div className="h6tt grayI mb-0 mt-1">
          Agrees to the a Terms, E-Sign & Privacy Policy
        </div>
      </div>
      <div className="mt-5">
        <ButtonComp
          // onClick={onNext}
          btnText={<h4 className="mb-0">Proceed</h4>}
          btnClassName="primaryI py-2 text-white w-100"
        />
      </div>
    </div>
  );
}
